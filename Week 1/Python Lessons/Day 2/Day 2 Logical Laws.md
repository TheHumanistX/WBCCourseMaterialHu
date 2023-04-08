`NOTE: I don't think this file will be included, as the diagram will serve this purpose better`


### Logical Laws (Diagram)
Logic obeys its own set of rules and laws. While these aren't necessary to know when coding with logic, they can often improve your ability to rewrite logical conditions in more succinct forms. See the diagram for a visual illustration of most of these laws.

##### Double Negation
Just like negatve numbers in Algebra, `not`'s cancel each other out:
* `not not p == p`

##### Non-Contradiction
If something is `not True`, then it is `False`. Also, if something is `not False`, then it is `True`:
* `not True == False`
* `not False == True`

##### Identity (Law of Conjunction and Law of Disjunction)
In these laws, the result is always whatever the value of `p` is:
* `p and True == p`
* `p or False == p`

##### Domination
These laws are the opposite of the Identity laws, and they show when the result is either always `True` or always `False`:
* `p and False == False`
* `p or True == True`

##### Contradiction
These two laws are slightly less obvious until you think about them:
* `p or not p == True`
* `p and not p == False`

#### Order of Precedence
This is the order in which logical operators are evaluated when they are not grouped:
* `p or not q and v == p or ((not q) and v)`

##### Absorption
This one is fairly powerful, and not in any way obvious:
* `p or (p and q) == p`
* `p and (p or q) == p`

##### Distributive
Sometimes you can find distributive patterns in your conditionals, in which case you may be able to use the distributive law to simplify them:
* `(p and q) or (p and r) == p and (q or r)`
* `(p or q) and (p or r) == p or (q and r)`

##### Commutative
The `and` and `not` operators are commutative, meaning you can switch the order of their operands without changing the result:
* `p or q == q or p`
* `p and q == q and p`

##### Associative
Where you place parantheses does not matter if it's for the same `and` or `or` operator:
* `p and (q and r) == (p and q) and r`
* `p or (q or r) == (p or q) or r`

##### Idempotent
A value and itself is always itself, while a value or itself is also always itself:
* `p and p == p`
* `p or p == p`

##### DeMorgan's Law
This law is not obvious, so much so that it was named after the mathematician who developed it. It is a law for distributing `not` operators among `and` and `or` operators:
* `not (p and q) == (not p) or (not q)`
* `not (p or q) == (not p) and (not q)`