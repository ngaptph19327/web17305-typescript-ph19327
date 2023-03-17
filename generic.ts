// function showStringdata(data: string): string {
//     return "pham thi nga";
// }
// function showdata(a: number): number {
//     return a;
// }
// // Generic
// function showdatas<T>(a: T): T {
//     return a;
// }

// showdatas<number>(10);


// function web_17305map<T>(arr: T[], callback: (iteam: T, index: number) => T): T[] {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         const newIteam = callback(arr[i], i)
//         temp.push(newIteam)
//     }
//     return temp;
// }
const number = [2, 3, 6, 7, 4, 8];
const string = ["Nga", "van", "vy", "ly"];

function sortSelection(arr: string[]) {
    for (let i = 0; arr.length - 1; i++) {
        for (let j = i + 1; arr.length; j++) {
            if (arr[j] < arr[i]) {
                const temp = arr[i]
                arr[j] = arr[i]
                arr[j] = temp
            }

        }
    }
    return arr;
}

function selectionSort<T>(arr: T[], compare?: (a: T, b: T) => Number): T[] {
    if (!compare) {
        compare = function (a: T, b: T) {
            if (a > b) {
                return 1
            } else {
                return 0;
            }
        }

    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compare(arr[i], arr[j]) > 0) {
                const temp = arr[i]
                arr[j] = arr[i]
                arr[j] = temp
            }
        }
    }
    return arr
}

//Bubble Sort.
function bubblesort(arr: string[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                let temps = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temps
            }
        }

    }
    return arr;
}
// false, 0, undefain, nan = falsy 
// trust => 
//generic  Bubble Sort.
function geBubbleSort<T>(arr: T[], callback?: (x: T, y: T) => number, reverse?: boolean): T[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = arr.length - 1; j > i; j--) {
            let compareResult: number | T;
            if (reverse) {
                if (callback) {
                    compareResult = callback(arr[j], arr[j - 1])
                }
            } else {
                if (callback) {
                    compareResult = callback(arr[j - 1], arr[j])
                }
            }
            if (compareResult > 0) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}
console.log(geBubbleSort([1, 45, 3]));
console.log(geBubbleSort([1, 45, 3], (a, b) => b - a), true);
console.log(geBubbleSort(['dang', 'a', 'b'], (a, b) => a.localeCompare(b)), true);
console.log(geBubbleSort(['dang', 'a', 'b']));