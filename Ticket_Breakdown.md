# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket 1:
Remove the internal database id of an agent's metadata from generated report.

Acceptance criteria:
1. Generated report should not have database internal id of the agent.

Effort Estimate:
2 hrs

## Ticket 2:
Modify database query to fetch the agent's own custom id assigned to them by facility.

Acceptance criteria:
1. New query should show the agent's custom id when getShiftsByFacility is called and when report are generated.

Effort Estimate:
4 hrs

## Ticket 3:
Add the custom Agent id to the report
Acceptance criteria:
1. Information on the Agent ID to be displayed or stored using the metadata shown and mapping with the Facility.

Effort Estimate:
4 hrs

## Ticket 4:
Test and Verify the report and see if there are any regression issue. 
Acceptance criteria:
1. No side effect apart from the agent id should be there and no regression issue.

Effort Estimate:
8 hrs