# Data Structures Exercises
## 1. Lists: Append, Insert, Extend

1.1. Create a list called fruits and use the append() method to add "apple", "banana", and "orange" to the list. Print the resulting list.

1.2. Create a list called numbers and use the insert() method to add the number 5 at index 0, the number 10 at index 1, and the number 15 at index 2. Print the resulting list.

1.3. Create two lists called list1 and list2. Add the elements "a", "b", and "c" to list1. Add the elements "d", "e", and "f" to list2. Use the extend() method to append the elements of list2 to list1. Print the resulting combined list.

1.4. Create a list called animals and use the append() method to add "cat", "dog", and "lion" to the list. Then, use the insert() method to insert "elephant" at index 1. Print the resulting list.

1.5. Create a list called colors and use the extend() method to add the elements of two other lists, primary_colors and secondary_colors. The primary_colors list should contain "red", "blue", and "yellow", and the secondary_colors list should contain "green", "orange", and "purple". Print the resulting list.

## 2. Lists: Pop, Remove, Index

2.1. Create a list called weekdays with the elements "Monday", "Tuesday", "Wednesday", "Thursday", and "Friday". Use the pop() method to remove the last element from the list and print the removed element as well as the modified list.

2.2. Create a list called names with the elements "Alice", "Bob", "Charlie", "David", and "Eve". Use the remove() method to remove "David" from the list. Print the modified list.

2.3. Create a list called grades with the elements 85, 90, 78, 92, and 88. Use the index() method to find the index of the grade 92 in the list. Print the index.

2.4. Create a list called cities with the elements "New York", "Paris", "London", "Tokyo", and "Berlin". Use the pop() method to remove the element at index 1 from the list and print the removed element as well as the modified list.

2.5. Create a list called shopping with the elements "milk", "eggs", "bread", "cheese", and "butter". Use the remove() method to remove "bread" from the list. Then, use the index() method to find the index of "cheese" in the modified list. Print the modified list and the index of "cheese".

## 3. Lists: Count, Sort, Reverse

3.1. Create a list called numbers with the elements 2, 5, 3, 5, 8, 5, 1, and 7. Use the count() method to find the number of times the number 5 appears in the list. Print the count.

3.2. Create a list called ages with the elements 25, 30, 18, 42, 55, and 28. Use the sort() method to sort the list in ascending order. Print the sorted list.

3.3. Create a list called words with the elements "hello", "world", "python", "programming", and "fun". Use the sort() method to sort the list in alphabetical order. Print the sorted list.

3.4. Create a list called letters with the elements "a", "c", "b", "f", "e", and "d". Use the reverse() method to reverse the order of the elements in the list. Print the reversed list.

3.5. Create a list called temperatures with the elements 72, 65, 78, 60, 68, and 75. Use the sort() method to sort the list in descending order. Print the sorted list.

## 4. Dictionaries: Get, Keys, Values

1.1. Create a dictionary called student with keys "name", "age", and "grade" and corresponding values "John", 15, and 9. Use the get() method to retrieve the value associated with the key "age". Print the result.

1.2. Create a dictionary called car with keys "brand", "model", and "year" and corresponding values "Toyota", "Camry", and 2018. Use the keys() method to retrieve a list of all the keys in the dictionary. Print the result.

1.3. Create a dictionary called fruit_colors with keys "apple", "banana", and "cherry" and corresponding values "red", "yellow", and "red". Use the values() method to retrieve a list of all the values in the dictionary. Print the result.

1.4. Create a dictionary called country_capitals with keys "USA", "UK", "Germany", and "Japan" and corresponding values "Washington D.C.", "London", "Berlin", and "Tokyo". Use the get() method to retrieve the capital of "Germany". Print the result.

1.5. Create a dictionary called prices with keys "apple", "orange", and "grape" and corresponding values 0.5, 0.75, and 1.25. Use the keys() and values() methods to print the list of keys and values in two separate lines.

## 5. Dictionaries: Pop, Popitem, Clear

2.1. Create a dictionary called inventory with keys "shirt", "pants", and "shoes" and corresponding values 10, 5, and 3. Use the pop() method to remove the key "pants" and its associated value from the dictionary. Print the modified dictionary.

2.2. Create a dictionary called user with keys "username", "password", and "email" and corresponding values "user123", "pass456", and "user@example.com". Use the popitem() method to remove and return an arbitrary key-value pair from the dictionary. Print the removed key-value pair and the modified dictionary.

2.3. Create a dictionary called languages with keys "Python", "JavaScript", and "Java" and corresponding values "Guido van Rossum", "Brendan Eich", and "James Gosling". Use the clear() method to remove all the key-value pairs from the dictionary. Print the modified dictionary.

2.4. Create a dictionary called colors with keys "red", "blue", and "green" and corresponding values "FF0000", "0000FF", and "00FF00". Use the pop() method to remove the key "blue" and its associated value from the dictionary. Print the modified dictionary.

2.5. Create a dictionary called greetings with keys "English", "Spanish", and "French" and corresponding values "Hello", "Hola", and "Bonjour". Use the popitem() method to remove and return an arbitrary key-value pair from the dictionary. Print the removed key-value pair and the modified dictionary.

## 6. Dictionaries: Copy, Update

3.1. Create a dictionary called person1 with keys "name", "age", and "city" and corresponding values "Alice", 30, and "New York". Create a shallow copy of the person1 dictionary called person2 using the copy() method. Print both dictionaries.

3.2. Create two dictionaries called dict1 and dict2. The dict1 should have keys "a", "b", and "c" with corresponding values 1, 2, and 3. The dict2 should have keys "d", "e", and "f" with corresponding values 4, 5, and 6. Use the update() method to add the key-value pairs from dict2 to dict1. Print the updated dict1.

3.3. Create a dictionary called employee with keys "name", "position", and "salary" and corresponding values "John", "manager", and 50000. Create a shallow copy of the employee dictionary called employee_copy using the copy() method. Change the value of "salary" in employee_copy to 55000. Print both dictionaries to ensure that only the copy is modified.

3.4. Create two dictionaries called grocery1 and grocery2. The grocery1 should have keys "milk", "eggs", and "bread" with corresponding values 2, 6, and 1. The grocery2 should have keys "bread", "butter", and "cheese" with corresponding values 2, 1, and 3. Use the update() method to update the values in grocery1 with the key-value pairs from grocery2. Print the updated grocery1.

3.5. Create a dictionary called scores with keys "math", "english", and "history" and corresponding values 85, 90, and 78. Create a shallow copy of the scores dictionary called scores_copy using the copy() method. Update the value of "english" in scores_copy to 95. Print both dictionaries to ensure that only the copy is modified.