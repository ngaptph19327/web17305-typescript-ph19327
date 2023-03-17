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
var number = [2, 3, 6, 7, 4, 8];
var string = ["Nga", "van", "vy", "ly"];
function sortSelection(arr) {
    for (var i = 0; arr.length - 1; i++) {
        for (var j = i + 1; arr.length; j++) {
            if (arr[j] < arr[i]) {
                var temp = arr[i];
                arr[j] = arr[i];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
function selectionSort(arr, compare) {
    if (!compare) {
        compare = function (a, b) {
            if (a > b) {
                return 1;
            }
            else {
                return 0;
            }
        };
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (compare(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[j] = arr[i];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
//Bubble Sort.
function bubblesort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = arr.length - 1; j > i; j--) {
            if (arr[j] < arr[j - 1]) {
                var temps = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temps;
            }
        }
    }
    return arr;
}
// false, 0, undefain, nan = falsy 
// trust => 
//generic  Bubble Sort.
function geBubbleSort(arr, callback, reverse) {
    // if (!calback) {
    //     function ckeck(x: T, y: T) {
    //         if (x < y) {
    //             return 1
    //         } else {
    //             return 0
    //         }
    //     }
    // }
    for (var i = 0; i < arr.length - 1; i++) {
        // ([1, 45, 3] => lenght = 3 - 1 = 2> arr[2]
        // i = 0 => 1
        for (var j = arr.length - 1; j > i; j--) {
            // j = 0 => 3, j = leng - 1 = 1
            // if (arr[j] < arr[j - 1]) {
            //     let temps = arr[j]
            //     arr[j] = arr[j - 1]
            //     arr[j - 1] = temps
            // }
            var compareResult = void 0;
            if (reverse) {
                // compareResult = callback ? callback(arr[j], arr[j - 1]) : (arr[j] as any) - (arr[j - 1] as any);
                if (callback) {
                    compareResult = callback(arr[j], arr[j - 1]); // (arr[j] = 3, arr[j - 1] = 1
                }
            }
            else {
                // compareResult = callback ? callback(arr[j - 1], arr[j]) : (arr[j - 1] as any) - (arr[j] as any);
                if (callback) {
                    compareResult = callback(arr[j - 1], arr[j]);
                }
            }
            if (compareResult > 0) {
                var temp = arr[j];
                arr[j] = arr[j - 1]; // 3 -> 1
                arr[j - 1] = temp; // 1 -> tamp => 1, 3, 45
            }
        }
    }
    return arr;
}
console.log(geBubbleSort([1, 45, 3]));
console.log(geBubbleSort([1, 45, 3], function (a, b) { return b - a; }), true);
console.log(geBubbleSort(['dang', 'a', 'b'], function (a, b) { return a.localeCompare(b); }), true);
console.log(geBubbleSort(['dang', 'a', 'b']));
