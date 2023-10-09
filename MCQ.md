<div>
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
let greeting;
greetign = {};
console.log(greetign);


- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>Answer</b></summary>
<p>

#### Answer:- B: ReferenceError: greetign is not defined

<i>The variable name is 'greeting,' and it was declared as 'greeting.' However, 'greeting' is not a defined variable. Instead, it contains an empty object. That's why the answer is "ReferenceError: greetign is not defined."</i>


</p>
</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");


- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>Answer</b></summary>
<p>

#### Answer: "12"

<i>JavaScript will automatically convert the number to a string when attempting to concatenate it with a string, resulting in the string "12".</i>


</p>
</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: ['🍕', '🍫', '🥑', '🍔']

<i>The 'food' array remains unchanged despite assigning the value 🍝 to the "info.favoriteFood" property. Consequently, when we log the 'food' array, it retains its original elements. This is why the correct answer is ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());


- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: Hi there, undefined

<i>When 'sayHi()' is invoked without specifying any argument, it defaults to using 'undefined' as the value for 'name.' This is why the correct output is "Hi there, undefined."</i>


</p>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);


- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Iterating through the 'nums' array using the "forEach" method, we increment the count by 1 for each truthy number encountered in the callback function. This is why the final answer is "3."</i>


</p>
</details>