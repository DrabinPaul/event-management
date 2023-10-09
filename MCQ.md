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

<i>Write your explanation here</i>
The variable name is greeting.Here declared the variable as 'greeting'.But greeting is not a defiend variable.This is a empty object.That's why the answer is "ReferenceError: greetign is not defined".

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

<i>Write your explanation here</i>
Here is trying to add concatenation a string with a number.Javascript will convet the number to a string.that's why the answer is "12".

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

<i>Write your explanation here</i>
There is an array which called 'food'.There also have an array call 'info'.The "info.favoriteFood" property is assigned the value 🍝.But this does not affect the 'food' array.Thereofore whene we log the 'food' array,it will still contain the orginal elements.Thats why the correct answer is ['🍕', '🍫', '🥑', '🍔']

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

<i>Write your explanation here</i>
When we call 'sayHi()' without providing any argument,it uses the default value of undefind for 'name'. That's why the correct answer is "Hi there, undefined"

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

<i>Write your explanation here</i>
Iterating the 'nums' array by using "forEach".The callback function.If each number is truthy,the condition is true.then count is increase by 1 for each of theme.That's why the answer is "3".

</p>
</details>