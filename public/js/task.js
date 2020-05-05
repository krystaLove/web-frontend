
/**
 * Функция, возвращающая случайную перестановку из 100 элементов
 *
 * @returns {array}
 */
function generatePermutation(){
    return Array(100)
    .fill(0)
    .map((val, index) => index + 1)
    .sort(() => 0.5 - Math.random());
}

/**
 * Функция, выполняющая задание
 */
function task(){
    let arr1 = generatePermutation();
    let arr2 = arr1.slice().reverse();
    let arr3 = arr1.map((val, index) => val - arr2[index]);
    let average = arr3.reduce((sum, val) => sum + val) / arr3.length;

    document.getElementById('arr1').innerHTML = '<p><b>Array 1</b></p>' + arr1.join(' ');
    document.getElementById('arr2').innerHTML = '<p><b>Array 2</b></p>' + arr2.join(' ');
    document.getElementById('arr3').innerHTML = '<p><b>Array 3</b></p>' + arr3.join(' ');
    document.getElementById('mid').innerHTML = '<p><b>Average of Array 3</b></p>' + average;

}

document.getElementById("generate-btn").addEventListener('click', task);