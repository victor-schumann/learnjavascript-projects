# LearnJavascript.online Exercises Log
A place to store & review the exercise solutions throu the "Learn Js Online" course.

<!--
<details>
<summary>
<b>exerciseTitle</b>
</summary>

```javascript

```
</details>
-->
<details>
<summary>
<b>Array Chapter Recap</b>
</summary>

- `const data = [1, 2, 3]` is an array containing 3 numbers.
- `array.length` returns the number of elements inside the array.
- 
- `array.push(x)` allows you to add the variable x to the end of the array.
- `array.push(x)` returns the new length of the array (after the push has been made).
- Arrays defined with const are not constants because you can change the elements inside of it. However, you cannot re-assign them to another value thus they will always be an array.
- `.forEach(callback)` iterates over every item in an array.
A callback is a function definition passed as an argument to another function.
- Always start with a `console.log()` inside the `.forEach()` to visualize the shift from array to array item (you can skip that when you become used to it).

- The `.forEach()` method will take your function definition and call it for every item of the array. Every time the callback is called, the first parameter will represent the corresponding array item.

- Name your arrays in plural and the array item (inside the `.forEach()`) in singular.

- Make sure to correctly place the return inside a function that contains a `.forEach()`.
</details>

<details>
<summary>
<b>array.map()</b>
</summary>

```javascript
/**
 * I got agead of myself and also did not make it with this one. My error was regarding the return method. I forgot that I needed to add the 'return' before the strings.map(). Next time I get "undefined" I'm gonna make sure to check what my functions are returning.
 * 
 * @param {string[]} strings
 */
function getStringSizes(strings) {
    return strings.map(function(string) {
        return string.length;
    })
}

// Sample usage - do not modify
console.log(getStringSizes(["a", "abc"])); // [1, 3]
console.log(getStringSizes(["Sam", "Alex", "Charlie"])); // [3, 4, 7]
console.log(getStringSizes(["Hello", "Blue"])); // [5, 4]
```
</details>


<details>
<summary>
<b>array.includes()</b>
</summary>

```javascript
/**
 * @param {string[]} apps
 * @param {string} app
 * Complete the function isAppUsed such that it returns true when the app parameter it receives exists in the apps parameter, and false otherwise.
 */
function isAppUsed(apps, app) {
    return apps.includes(`${app}`)
}

// Sample usage - do not modify
console.log(isAppUsed(["Twitter", "Calculator"], "Calculator")); // true
console.log(isAppUsed(["Clock", "Calculator"], "Safari")); // false
```
</details>


<details>
<summary>
<b>array.filter()</b>
</summary>

```javascript
function getOddYears(years) {
    return years.filter(function(year) {
        return year % 2 === 1;
    })

}
```
</details>

<details>
<summary>
<b>array.find()</b>
</summary>

```javascript
/*This one got me. I didn't connect I should alerady start the 2nd line with the return call.*/
function getYear(years, searchYear) {
  return years.find(function(year) {
    return year === searchYear;
  });
}
```

</details>

<details>
<summary>
<b>getPositiveTemperatures()</b>
</summary>

```javascript
function getPositiveTemperatures(temperatures) {
    let positiveTemp = temperatures.filter(function(x) {
        return x > 0;
    })
    return positiveTemp;
}
```
</details>

<details>
<summary>
<b>array.forEach()</b>
</summary>

```javascript
/**
 * @param {array[][]} rows
 */
export function renderTableRows(rows) {
    let html = "";
    rows.forEach(function(row) {
        html += `<tr>
        <td>${row[0]}</td>
        <td>${row[1]}</td>
    </tr>`
    });
    return html;
}

```
</details>



<details>
<summary>
<b>dropdownCountries</b>
</summary>

```javascript
/**
 * @param {string[]} countries
 */
export function getDropdown(countries) { 
    let html = `<option value="">Please select</option>`;   
    countries.forEach(function(country) {
        html += `<option value="${country.toLowerCase()}">${country}</option>`
    })
    return html;
}

```
</details>

<details>
<summary>
<b>sumOddNumbers</b>
</summary>

```javascript
/**
 * @param {number[]} numbers
 */
function sumOddNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number % 2 !== 0) {
            sum = sum + number;
        }
    });
    return sum;
}

// Sample usage - do not modify
console.log(sumOddNumbers([15, 5, 10])); // 20
console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2

```
</details>