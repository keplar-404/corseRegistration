
## Features

• Add a course to the purchase card.

• Cannot add a course if the credit limit has been reached.

• Toast messages will appear based on the behavior.



## Discussion of managing the state.

This project use useState hook for managing different data to add and show in the purches card.  Let's break it down.

#### 1. Initialization of State Variables:

FetchData, cardsData, and cardsCalculation are used to keep track of different things in the application and fetching Data from an External Source.

#### 2. Notification Functions:
NotifySuccessAddCard, notifyErrorCardAlreadyExits, notifyErrorRemain functions will be called and show a toat according to the functionality.


#### 3. Adding Data to the State

addData function will add the course and details to the state and manage them.