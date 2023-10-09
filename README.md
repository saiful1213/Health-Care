# Health-Care
## https://health-care-5a386.web.app

- In Health-Care you will find our best certified doctor.
- In this website you will see various types of services. And also see service details
- In Doctor Route you will find special doctor. Also there are mention Registration process of appointment
- In Blog route you will see Latest News of our Health-Care.
- Also there are Our Client feedback and Frequently Asked Question.



<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (B).ReferenceError: greetign is not defined 

   here the variable name is greeting. But in console.log is greetign which is not defined. So, the answer will be 'RefferenceError: greetign is not defined' 
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### (C). "12" 

   right answer is string 12. because of string concatination. data type of "a" is number but "b" is string. that's why the answer will be "12".
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: (A). ['🍕', '🍫', '🥑', '🍔']

   right answer is "A". Because the food array is as it is. here info object property first time set foo[0] and then update it "🍝". main food array in not change ultimately. so, answer is A.   
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ("C")

   sayHi func reacieve a parameter called name. but when it call the argument is empty. So, value of name param is null.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ("D": 4)

<i>Write your explanation here</i>
   forEach method check in every iteration that the value of array which is "num" weather it's true or not. if it's true increase the count variable each time 1. in last, the value of count is 4. 
</p>
</details>