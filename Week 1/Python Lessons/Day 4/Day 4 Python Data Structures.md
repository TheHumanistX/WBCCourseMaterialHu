# Python: Native Data Structures

## Introduction to Data Structures

Welcome to today's lesson on native data structures in Python! Before we dive into the specifics, let's start with a brief overview of what data structures are and why they are important in programming.
What are Data Structures?

Data structures are ways to organize and store data in a computer's memory. They provide efficient methods for accessing, manipulating, and managing data, making it easier to implement various algorithms and solve programming problems. Different data structures are suited for different tasks, and selecting the right data structure for a particular task can greatly improve the performance and efficiency of your program.
Why are Data Structures important in programming?

Data structures play a crucial role in programming because they help you:

* **Organize data:** Depending on the problem you're trying to solve, different data structures can help you efficiently store and manage your data.
* **Improve performance:** Choosing the right data structure can significantly optimize your program's performance in terms of time and memory usage.
* **Increase code readability:** Using appropriate data structures can make your code easier to understand and maintain, as they provide a clear structure and organization for your data.

In this lesson, we will be covering some of Python's built-in data structures: lists, tuples, sets, and dictionaries. These data structures are essential for any Python programmer and will also be useful when we move on to learning JavaScript and Solidity later in this course.

---

## Lists
#### What are Lists?

Lists are one of the most commonly used data structures in Python. They are ordered, mutable, and can store multiple values of any data type, including other lists. Lists are ideal for storing and manipulating sequences of data.

#### Creating Lists and Accessing Elements
To create a list, you can use square brackets [] and separate the elements with commas. Here's an example of a list containing integers, strings, and a float:

    my_list = [42, "apple", 3.14, "banana"]

To access elements in a list, you can use indexing. Python uses zero-based indexing, which means the first element is at index 0, the second element is at index 1, and so on. You can also use negative indexing to access elements from the end of the list. For example:

    first_element = my_list[0]  # 42
    last_element = my_list[-1]  # "banana"

Common List Operations
Append, Insert, and Extend

`append()` Adds a new element to the end of the list.

    my_list.append("grape")
    # my_list is now [42, "apple", 3.14, "banana", "grape"]

`insert()` Inserts a new element at a specified index.

    my_list.insert(1, "orange")
    # my_list is now [42, "orange", "apple", 3.14, "banana", "grape"]

`extend()` Adds multiple elements to the end of the list.

    my_list.extend(["kiwi", "mango"])
    # my_list is now [42, "orange", "apple", 3.14, "banana", "grape", "kiwi", "mango"]

#### Pop, Remove, and Index

`pop()` Removes and returns the element at a specified index. If no index is provided, it removes and returns the last element.

    last_element = my_list.pop()  # "mango"
    # my_list is now [42, "orange", "apple", 3.14, "banana", "grape", "kiwi"]

`remove()` Removes the first occurrence of a specified element.

    my_list.remove("apple")
    # my_list is now [42, "orange", 3.14, "banana", "grape", "kiwi"]

`index()` Returns the index of the first occurrence of a specified element.

    index_of_banana = my_list.index("banana")  # 3

#### Count, Sort, and Reverse

`count()` Returns the number of occurrences of a specified element in the list.

    my_list.append("banana")
    num_bananas = my_list.count("banana")  # 2

`sort()` Sorts the elements of the list in ascending order. For descending order, you can use the reverse=True argument.

    numbers = [4, 2, 9, 1, 7]
    numbers.sort()
    # numbers is now [1, 2, 4, 7, 9]

`reverse()` Reverses the order of the elements in the list.

    numbers.reverse()
    # numbers is now [9, 7, 4, 2, 1]

Now that you have a good understanding of lists and their common operations, you can start using them in your Python programs to store and manipulate sequences of data. In the next sections, we'll explore other native data structures in Python, such as tuples, sets, and dictionaries, to help you choose the right data structure for your programming tasks.

----------------

## Dictionaries

### What are Dictionaries?
Dictionaries are a built-in Python data structure that store key-value pairs. They are unordered, mutable, and allow for fast data access and modification based on keys. Dictionaries are particularly useful when you need to look up values based on unique keys or when you need to store mappings between pairs of values.

### Creating Dictionaries and Accessing Elements

To create a dictionary, you can use curly braces {} and separate the keys and values with colons, while separating the key-value pairs with commas. Here's an example of a dictionary containing information about a person:

    person = {
        "name": "John Doe",
        "age": 30,
        "city": "New York"
    }

To access elements in a dictionary, you can use the key in square brackets []. If the key is not present in the dictionary, Python will raise a KeyError. Alternatively, you can use the get() method, which returns None or a specified default value if the key is not present. For example:

    name = person["name"]  # "John Doe"
    age = person.get("age")  # 30
    country = person.get("country", "USA")  # "USA"

### Dictionary Methods
#### Get, Keys, and Values

`get()` Returns the value associated with a key, or None (or a specified default value) if the key is not present.

`keys()` Returns a view object that displays a list of all the keys in the dictionary.

    keys = person.keys()  # ["name", "age", "city"]

`values()` Returns a view object that displays a list of all the values in the dictionary.

    values = person.values()  # ["John Doe", 30, "New York"]

#### Pop, Popitem, and Clear

`pop()` Removes the key-value pair with the specified key and returns the associated value. If the key is not found, it returns a specified default value or raises a KeyError if no default value is provided.

    city = person.pop("city")  # "New York"
    # person is now {"name": "John Doe", "age": 30}

`popitem()` Removes and returns the last key-value pair added to the dictionary as a tuple. If the dictionary is empty, it raises a KeyError.

    key, value = person.popitem()  # ("age", 30)
    # person is now {"name": "John Doe"}

`clear()` Removes all key-value pairs from the dictionary.

    person.clear()
    # person is now {}

#### Copy, Update, and Dictionary Comprehensions

`copy()` Returns a shallow copy of the dictionary.

    person_copy = person.copy()

`update()` Merges the contents of one dictionary into another. If keys in the original dictionary already exist in the second dictionary, their values are updated with the values from the second dictionary.

    person.update({"age": 31, "country": "USA"})
    # person is now {"name": "John Doe", "age": 31, "city": "New York", "country": "USA"}

Now that you have a good understanding of dictionaries and their common operations, you can start using them in your Python programs to efficiently store and manipulate key-value pairs. In the remaining sections, we'll briefly cover tuples and sets, which are less commonly used in this course but still important to know as a Python programmer.

---

## Tuples

#### What are Tuples?
Tuples are similar to lists in Python, but they are immutable, which means their elements cannot be changed after they are created. Tuples are useful when you want to store a collection of values that should not be modified. Because of their immutability, tuples are generally faster and require less memory than lists.

#### Creating Tuples and Accessing Elements
To create a tuple, you can use parentheses `()` and separate the elements with commas. If there is only one element in the tuple, you must add a comma after the first element to indicate that it's a tuple. Here's an example of a tuple containing integers, strings, and a float:

    my_tuple = (42, "apple", 3.14, "banana")

To access elements in a tuple, you can use indexing, just like you would with a list. Python uses zero-based indexing for tuples as well. You can also use negative indexing to access elements from the end of the tuple. For example:

    first_element = my_tuple[0]  # 42
    last_element = my_tuple[-1]  # "banana"

#### Mutable vs Immutable Data Types

As mentioned earlier, one of the main differences between tuples and lists is that tuples are immutable, while lists are mutable. This means that once you create a tuple, you cannot modify its elements, add new elements, or remove elements. This can be advantageous when you want to ensure the integrity of the data stored in the tuple.

In summary, tuples are a useful data structure when you need to store a fixed sequence of values that should not be modified. While we won't be using tuples extensively in this course, it's good to know about them and be able to recognize their use cases as you encounter them in Python programming.

---

## Sets
#### What are Sets?

Sets are another built-in data structure in Python that store unordered collections of unique elements. Sets are useful for tasks that involve checking membership, eliminating duplicate entries, and performing mathematical set operations, such as union, intersection, and difference.

#### Creating Sets and Adding Elements

To create a set, you can use curly braces {} and separate the elements with commas. Alternatively, you can use the set() constructor to create an empty set or convert another iterable (e.g., a list or tuple) to a set. Here's an example of a set containing integers and strings:

    my_set = {42, "apple", 3.14, "banana"}

To add elements to a set, you can use the add() method. If the element is already in the set, it will not be added again since sets only store unique elements.

    my_set.add("orange")  # my_set is now {3.14, 42, "apple", "banana", "orange"}
    my_set.add("apple")  # my_set remains unchanged

#### Set Operations

Sets in Python support various operations, such as union, intersection, difference, and symmetric difference.

`union()` Returns a set containing all elements from both sets.

    a = {1, 2, 3}
    b = {3, 4, 5}
    result = a.union(b)  # {1, 2, 3, 4, 5}

`intersection()` Returns a set containing the elements that are common to both sets.

    result = a.intersection(b)  # {3}

`difference()` Returns a set containing the elements in the first set that are not in the second set.

    result = a.difference(b)  # {1, 2}

`symmetric_difference()` Returns a set containing elements that are unique to each set.

    result = a.symmetric_difference(b)  # {1, 2, 4, 5}

#### Differences between Sets and Dictionaries

At first glance, sets and dictionaries in Python might look similar because they both use curly braces {}. However, they serve different purposes and have distinct characteristics:

* Sets store unordered collections of unique elements, while dictionaries store key-value pairs.
* Sets do not allow duplicate elements, while dictionaries can have duplicate values but not duplicate keys.
* Sets only store elements, while dictionaries store both keys and values.

In conclusion, sets are a powerful data structure for tasks that involve checking membership, removing duplicates, and performing mathematical set operations. While we won't be using sets extensively in this course, it's essential to know about them and understand their use cases in Python programming.

---

## Working with Nested Data Structures

In Python, it's common to encounter situations where you need to work with nested data structures, such as lists within lists, dictionaries within dictionaries, or a combination of different data structures. Understanding how to work with nested data structures is essential for dealing with more complex data and organizing it efficiently.

#### Lists within Lists (Nested Lists)
Nested lists are lists that contain other lists as elements. They can be useful for representing multidimensional data, such as a matrix or a grid. To create a nested list, you can simply include lists as elements within another list. For example, here's a nested list representing a 3x3 matrix:

    matrix = [
        [1, 2, 3],  # matrix[0][n]
        [4, 5, 6],  # matrix[1][n]
        [7, 8, 9]   # matrix[2][n]
    ]

To access elements in a nested list, you can use multiple indices, one for each level of nesting. For example, to access the element in the second row and the third column of the matrix, you can use:

    element = matrix[1][2]  # Accesses 6

#### Dictionaries within Dictionaries (Nested Dictionaries)

Nested dictionaries are dictionaries that contain other dictionaries as values. They can be useful for organizing hierarchical data or grouping related data together. 

Here's an example of a nested dictionary representing information about a company's employees:

    employees = {
        "manager": {
            "name": "Alice",
            "age": 35,
            "city": "New York"
        },
        "developer": {
            "name": "Bob",
            "age": 28,
            "city": "San Francisco"
        }
    }

To access elements in a nested dictionary, you can use multiple keys, one for each level of nesting. For example, to access the age of the developer, you can use:

    age = employees["developer"]["age"]  # 28

---

## Mixed Data Structures

In some cases, you may need to work with data structures that mix lists and dictionaries or other combinations of data structures. For example, you could have a list of dictionaries representing information about multiple employees:

    employees = [
        {"name": "Alice", "age": 35, "city": "New York"},
        {"name": "Bob", "age": 28, "city": "San Francisco"}
    ]

To access elements in mixed data structures, you can use a combination of indices and keys. For example, to access the city of the first employee, you can use:

    city = employees[0]["city"]  # Returns "New York"

Working with nested data structures is a crucial skill in Python programming, as it allows you to manage and manipulate more complex data efficiently. As you progress in your programming journey, you'll likely encounter a wide variety of nested data structures, so it's essential to become comfortable working with them.


## Summary and Next Steps

In today's lesson, we covered various built-in data structures in Python, including lists, dictionaries, tuples, and sets. We also discussed how to work with nested data structures, which is an essential skill for managing more complex data in Python.

To recap, here are the main points we covered:

* **Lists:** Ordered, mutable collections of elements. We learned about list methods such as `append()`, `insert()`, `extend()`, `pop()`, `index()`, `count()`, `sort()`, `reverse()`, and `copy()`.
* **Dictionaries:** Unordered, mutable collections of key-value pairs. We learned about dictionary methods such as `get()`, `keys()`, `values()`, `pop()`, `popitem()`, `clear()`, `copy()`, and `update()`.
* **Tuples:** Ordered, immutable collections of elements. We briefly discussed how tuples can be used to store fixed sequences of values that should not be modified.
* **Sets:** Unordered collections of unique elements. We learned about set operations such as `add()`, `union()`, `intersection()`, `difference()`, and `symmetric_difference()`.
* **Working with Nested Data Structures:** We explored how to work with more complex data structures, such as nested lists, nested dictionaries, and mixed data structures.

As a next step, practice using these data structures in your Python programs to gain a deeper understanding of their capabilities and use cases. The more you work with them, the more comfortable you'll become in handling various types of data.

Keep up the great work, and happy coding!

