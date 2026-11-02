**Steps to setup the project**

1. Clone the project

`git clone https://github.com/karraanvesh/ExpenseTracker.git <ProjectName>`

2. Move in to the folder structure 

`cd <ProjectName>`

3. Install npm dependencies

`npm install`

4. Run the index.js

`Below are the list of commands to run the project`

`node src/index.js add --description "description of the expense " --amount <amount of the expense> --categories <type of the categorie>`

`node src/index.js update --id <id of the expense> --description <description of the expense>`

`node src/index.js update --id <id of the expense> --amount <amount of the expense>`

`node src/index.js update --id <id of the expense> --description <description of the expense> --amount <amount of the expense>`

`node src/index.js delete --id <id of the expense>`

`node src/index.js summary --month <month of the current year>`

`node src/index.js list`

`node src/index.js category --category <type of the category>`

`node src/index.js budget --budget <value of monthly budget>`

`node src/index.js export_to_CSV_File`

## Project URL

https://roadmap.sh/projects/expense-tracker