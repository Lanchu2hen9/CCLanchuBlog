#!/usr/bin/env node

// @ts-check

/**
 * q5js to ESM q5mjs [Node.js] (v1.0.6)
 * GoToLoop (2025/Mar/31)
 *
 * https://Gist.GitHub.com/GoToLoop/f3787d5ceab12ad5e1d26cca083f40df
 * https://Discourse.Processing.org/t/q5-js-esm-converter/46131
 * https://GitHub.com/q5js/q5.js/issues/112#issuecomment-2767634644
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, basename } from 'node:path';
import { argv } from 'node:process';
import https from 'node:https';

export { main as default, fetchRemoteFile, readFile, writeFile, replaceData };

const
  { log, error } = console, // Methods `log()` & `error()` from `console`.
  { freeze } = Object; // Method `freeze()` from `Object`.

/** Encoding option for reading and writing files as Unicode. */
const UTF8 = freeze({ encoding: 'utf8' });

/** The URL for the most current version of the q5.js library */
const REMOTE = 'https://cdn.JsDelivr.net/gh/q5js/q5.js/q5.js'; // CDN service.
// const REMOTE = 'https://q5js.org/q5.js'; // Q5.js site.

/** The filename of the library to be converted into an ECMAScript Module. */
const INPUT = 'q5.js';

/** The filename of the resulting ECMAScript Module (ESM) after conversion. */
const OUTPUT = 'q5.mjs';

/** Subfolder to read the `INPUT` and save the `OUTPUT` */
const FOLDER = 'q5'; // Subfolder option.
// const FOLDER = '.'; // Root folder option.

/** Full path for filename INPUT */
const PATH = join(FOLDER, INPUT); // Combine folder and input filename.

/** Full path for filename OUTPUT */
const OUTPATH = join(FOLDER, OUTPUT); // Combine folder and output filename.

/** @typedef {[what: string, swap: string]} PATTERN_NAMED_TUPLE */

/**
 * Immutable 2d-array containing patterns for finding and swapping strings.
 *
 * Each pattern is represented as a named tuple of two strings:
 * - [0] `what`: The substring pattern to find.
 * - [1] `swap`: The replacement string for the found pattern.
 *
 * Note: The `$&` in the replacement strings refers to the entire substring
 * which matched the pattern, allowing it to be retained in the result.
 */
const PATTERNS = freeze([
  freeze(/** @type {PATTERN_NAMED_TUPLE} */([
    'function Q5(', // WHAT[0]
    'export default $&' // SWAP[0]
  ])),

  freeze(/** @type {PATTERN_NAMED_TUPLE} */([
    'if (Q5._server)', // WHAT[1]
    '/*\n$&' // SWAP[1]
  ])),

  freeze(/** @type {PATTERN_NAMED_TUPLE} */([
    'function createCanvas(', // WHAT[2]
    '*/\n\nexport { Q5 as p5 };\n\nexport $&' // SWAP[2]
  ]))
]);

// Auto-starts if this util file has been directly executed from a terminal:
basename(import.meta.filename) == basename(argv[1]) && main();

/**
 * The main entry point for the script. It performs the following steps:
 *
 * 1. Ensures the subfolder FOLDER exists, creating it if necessary.
 * 2. Reads the local file at PATH if it exists, loading its contents.
 * 3. If the local file does not exist, fetches the remote file from REMOTE
 *    and saves it locally at PATH.
 * 4. Processes the obtained data by applying pattern transformations defined
 *    in PATTERNS.
 * 5. Writes the processed `data` to the output path specified by OUTPATH.
 *
 * @summary Logs significant execution events and handles errors gracefully.
 * If a critical error occurs (e.g., folder creation failure, unreadable file,
 * failed remote data fetch, or output save failure), it stops further
 * processing and raises an error.
 *
 * @throws {Error} If folder creation, file reading, remote file fetching, data
 *                 processing, or saving the output encounters any issue.
 */
async function main() {
  const file = 'file ' + INPUT, disk = INPUT + ' to disk.'; // Custom messages.

  if (!existsSync(FOLDER)) try { // Ensure folder exists before file operations.
    mkdirSync(FOLDER); // Creates a subfolder named FOLDER.
    log('Folder', FOLDER, 'successfully created.');
  } catch (err) { // Catches any exceptions from `mkdirSync()`.
    error('Failed to create subfolder', FOLDER + '!\n');
    throw err; // Re-throw it in order to stop proceeding to the next step.
  }

  if (existsSync(PATH)) { // Checks if INPUT PATH exists.
    var data = readFile(PATH); // Reads the local file if it exists.
    if (data) log('Local', file, 'read successfully.');
    else throw Error('Failed to load local ' + file + ' or it was empty!');
  } else try { // Fetches the remote file if the local file does not exist.
    if (writeFile(PATH, data = await fetchRemoteFile(REMOTE)))
      log('Remote file fetched and saved as', disk);
    else error('Failed to write file', disk);
  } catch (err) { // Catches any exceptions from `fetchRemoteFile()`.
    if (err.code && err.syscall) // Checks if it comes from `fetchRemoteFile()`.
      error('Error fetching remote', file, 'from:\n' + REMOTE + '\n');
    throw err; // Re-throw it regardless, stopping proceeding to the final step.
  }

  // Execution proceeds only if `data` was acquired as a non-empty string:
  data && typeof data == 'string' && saveSwappedData(processDataSwaps(data));
}

/**
 * Processes `data` by applying all patterns defined in PATTERNS. Each pattern
 * is used to find and replace substrings in the `data`.
 * @param {string} data - The file content to process
 * @returns {string} The swapped `data`
 */
function processDataSwaps(data) {
  for (const [what, swap] of PATTERNS) data = replaceData(data, what, swap);
  return data;
}

/**
 * Writes the processed `data` to full path OUTPATH.
 * @param {string} data - The file content to save
 */
function saveSwappedData(data) {
  if (writeFile(OUTPATH, data)) log(OUTPUT, 'successfully created.');
  else error('Failed to write file', OUTPUT, 'to disk!');
}

/**
 * Fetches a remote file from the specified URL.
 * @param {string | URL} url - The URL of the file to fetch
 * @returns {Promise<string>} A promise that resolves to the content of the
 *                            fetched file as a string.
 */
function fetchRemoteFile(url) {
  return new Promise((resolve, reject) => https.get(url, res => {
    log('statusCode:', res.statusCode, '\nheaders:', res.headers);
    var data = ''; // Stores all the incoming data chunks from the remote file.
    res.on('data', chunk => data += chunk).on('end', () => resolve(data));
  }).on('error', reject));
}

/**
 * Reads a file and returns its content.
 * @param {string | URL} path - Path to the file
 * @returns {string} File content or an empty string on error
 */
function readFile(path) {
  try { return readFileSync(path, UTF8); }
  catch (err) { return error(err.message), ''; }
}

/**
 * Writes data to a file.
 * @param {string | URL} path - Path to the file
 * @param {string} data - Data to be written
 * @returns {boolean} True if successful, false otherwise
 */
function writeFile(path, data) {
  try { return writeFileSync(path, data, UTF8), true; }
  catch (err) { return error(err.message), false; }
}

/**
 * Replaces a substring within a string.
 * @param {string} data - The original string
 * @param {string | RegExp} what - The substring pattern to be replaced
 * @param {string} swap - The replacement substring for the found pattern
 * @param {boolean} [all=false] - Whether to replace all matches or just the 1st
 * @returns {string} The resulting string after replace operation on `data`
 */
function replaceData(data, what, swap, all=false) {
  /** @type {string} - The resulting string after performing the replacement */
  const altered = data[all && 'replaceAll' || 'replace'](what, swap);

  altered == data && error(
    `"${ what }"\nnot found when attempting:\n"${ swap }"\n`
  );

  return altered;
}
