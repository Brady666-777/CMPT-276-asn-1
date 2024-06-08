Part A - HTML/CSS:
Create two files called “calculator.html” and “calculator.css” to recreate (as closely as possible) the layout shown in the provided image (copied from Coursys and displayed in a browser window). 

You may make any reasonable guesses regarding fonts, colors, and measurements. You may add additional HTML elements for the next part, but we will only check for the elements shown in the provided image.

image.png


Part B – JavaScript:
The image shows a webpage that an instructor can use to enter a series of Graded Activities. Initially, there will be a form showing one graded activity. An "ADD ROW" button is also available for the instructor to enter more activities as needed (the image below shows the result of clicking the ADD ROW button one time after initialization of the webpage. In addition, the instructor can choose between calculating the “Mean of grades” or “Weighted grades”. The result should be displayed under the “Result” label in the image. The Percentage column (the percentage of the corresponding activity) should be updated live as the user types into the “Grade” column. 

Mean of grades: The sum of all grades divided by the total number of grades. Example:

A1: 70/100
A2: 20/80
A3: 10/10
(0.7+0.25+1.0)/3=0.65⇒65/100

Weighted grades: Each grade item can be given a weight, which is then used in the arithmetic mean calculation to influence the importance of each item in the overall mean. In simple terms, the total will be equal to the sum of the scores in each grade item, with these scores being multiplied by the grade items' weights. This sum is then divided by the sum of the weights. Example:

A1: 70/100, weight 10
A2: 20/80, weight 5
A3: 10/10, weight 3
(0.7∗10+0.25∗5+1.0∗3)/18=0.625⇒62.5/100

Hint: You may want to consider using JavaScript functions such as:

onclick()
getElementsByTagName()
getElementsByName()
Usability:
A small portion of the grade will be dedicated to usability and effort, which include learnability and likeability. The existence of bugs and lack of error checking may result in a lower usability score.

 

Deployment
Deploy your application on Render.com. Ensure that the project is also pushed onto GitHub. Your TA should be able to access both the live application and its source code. If using a private repository, add your TA's GitHub account as a collaborator.

Marking Scheme:
Part A:

5 marks: The colors, fonts, and spacing should closely match the provided image.
Part B:

5 marks: The ability to add more rows and dynamic calculations
7 marks: The correct values should be calculated for buttons.
4 marks: Effort and usability.
Project:

3 mark: Running on Render. Project pushed to GitHub. We must be able to find your working app at the web app link and should be able to clone your project from the Git link.
Submission:
Your webpage must be stored in your Spring application's “static” folder and pushed to the hosting platform (Render.com). As with all subsequent assignments/project iterations, you should submit a text file with the following information onto Canvas.

The URL of your web app; this is where we can play around with your application. It is your responsibility to ensure that you have the correct URL.  If the TAs cannot find it, he/she cannot mark it.
Your Git link is where we can view your code, progress and submission time.
 If you cannot push it to the hosting platform (render.com), you may get partial marks if you upload your work as a zip file.
