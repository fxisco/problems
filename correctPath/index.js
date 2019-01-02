/**
 * Have the function CorrectPath(str) read the str parameter being passed,
 * which will represent the movements made in a 5x5 grid of cells starting from the
 * top left position. The characters in the input string will be entirely
 * composed of: r, l, u, d, ?. Each of the characters stand for the direction to take within the grid,
 * for example: r = right, l = left, u = up, d = down. Your goal is to determine what characters the
 * question marks should be in order for a path to be created to go from the top left of the grid all
 * the way to the bottom right without touching previously travelled on cells in the grid.
 *
 * For example: if str is "r?d?drdd" then your program should output the final correct string that will
 * allow a path to be formed from the top left of a 5x5 grid to the bottom right.
 * For this input, your program should therefore return the string rrdrdrdd.
 * There will only ever be one correct path and there will always be at least one
 * question mark within the input string.
 */

const SIZE = 5;
let grid = [];
const QUESTION_MARK = '?';
const UP = 'u';
const DOWN = 'd';
const LEFT = 'l';
const RIGHT = 'r';
const EMPTY = ' ';
const FWD = 'FWD';
const BWD = 'BWD';
const MARK = 'x';
const STEPS = [
  RIGHT,
  DOWN,
  UP,
  LEFT
];
let x = 0;
let y = 0;
let direction = FWD;
let currentIndex = 0;
let original;
let state = {};
let copy;

[...new Array(SIZE)].forEach((row) => {
  grid.push(Array(SIZE).fill(EMPTY));
});

function sanitize (str) {
    return str.toLowerCase().trim();
}

function getNextPos (nextStep, posX, posY) {
  if (nextStep === RIGHT && posX + 1 < SIZE) {
    posX++;
  } else if (nextStep === LEFT && (posY === 0 ? posX - 1 >= 1 : posX - 1 >= 0)) {
    posX--;
  } else if (nextStep === UP && (posX === 0 ? posY - 1 >= 1 : posY - 1 >= 0)) {
    posY--;
  } else if (nextStep === DOWN && posY + 1 < SIZE) {
    posY++;
  }

  return {
    x: posX,
    y: posY
  }
}

function isFinishLine () {
  return x === SIZE - 1 && y === SIZE - 1 && currentIndex === original.length;
}

function isIndexOutOfBound () {
  return currentIndex >= original.length;
}

function hasNoAnswer () {
  return currentIndex < 0;
}

function moveBackward () {
  --currentIndex;
  direction = BWD;
}

function moveForward () {
  ++currentIndex;
  direction = FWD;
}

function isRequiredStep () {
  return original[currentIndex] !== QUESTION_MARK;
}

function areStepsToBeTaken() {
  return !!(state[currentIndex]['steps'] && state[currentIndex]['steps'].length > 0)
}

function isNextStepEmpty ({ x: nextX, y: nextY }) {
  return grid[nextY][nextX] === EMPTY;
}

function initializeState (index) {
  if (!state[index]) {
    state[index] = {};
    state[index]['grid'] = [...grid];

    if (!isRequiredStep()) {
      state[currentIndex]['steps'] = [...STEPS];
    }
  }
}

function takeStep () {
  const nextStep = state[currentIndex]['steps'].shift();
  const { x: nextX, y: nextY } = getNextPos(nextStep, x, y)

  if (isNextStepEmpty({ x: nextX, y: nextY })) {
    state[currentIndex]['x'] = x;
    state[currentIndex]['y'] = y;
    x = nextX;
    y = nextY;
    state[currentIndex]['grid'] = [...grid];
    grid[nextY][nextX] = nextStep;
    copy[currentIndex] = nextStep;

    moveForward();
  }
}

function CorrectPath(str) {
    str = sanitize(str);
    let finished = false;

    copy = [...str];
    original = [...str];
    grid[y][x] = MARK;

    while (!finished) {
      initializeState(currentIndex);

      if (direction === FWD) {
        if (isFinishLine()) {
          finished = true;

          continue;
        } else if (isIndexOutOfBound()) {
          moveBackward();

          continue;
        }

        if (isRequiredStep()) {
          let previousX = x;
          let previousY = y;
          const { x: nextX, y: nextY } = getNextPos(original[currentIndex], x, y);

          if (nextX !== previousX || nextY !== previousY) {
            state[currentIndex]['x'] = previousX;
            state[currentIndex]['y'] = previousY;
          }

          if (isNextStepEmpty({ x: nextX, y: nextY })) {
            grid[nextY][nextX] = original[currentIndex];
            y = nextY;
            x = nextX;
            moveForward();
          } else {
            grid[y][x] = EMPTY;
            moveBackward();
          }

          continue;
        }

        if (areStepsToBeTaken()) {
          takeStep();

          continue;
        } else {
          copy[currentIndex] = QUESTION_MARK;
          state[currentIndex]['steps'] = [...STEPS];
          grid[y][x] = EMPTY;

          moveBackward();

          continue;
        }
      }

      if (direction === BWD) {

        if (state[currentIndex]['grid']) {
          grid = [...state[currentIndex]['grid']];
          x = state[currentIndex]['x'];
          y = state[currentIndex]['y'];
        }


        if (hasNoAnswer()) {
          return -1;
        }

        if (isRequiredStep()) {
          grid[y][x] = EMPTY;
          moveBackward();

          continue;
        }

        if (areStepsToBeTaken()) {
          takeStep();

          continue;
        } else {
          copy[currentIndex] = QUESTION_MARK;
          state[currentIndex]['steps'] = [...STEPS];
          grid[y][x] = EMPTY;
          moveBackward();

          continue;
        }
      }

    }

    return copy.join('');
  }

console.log(CorrectPath("???rrurdr?"));


// Input:"???rrurdr?"

// Output:"dddrrurdrd"


// Input:"drdr??rrddd?"

// Output:"drdruurrdddd"
