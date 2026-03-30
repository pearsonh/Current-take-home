## CPay App

This is the starter template from the Next.js App Router Course. It contains the starting code for the dashboard application modified for our take home exercise purposes.

## Overview

The P2P payment market is booming, with projections estimating it will surpass $5.2 trillion by 2028. As more consumers and businesses adopt these technologies, being a part of this space positions you at the forefront of financial innovation and growth. This is your chance to contribute to a sector that is reshaping how money is transferred and managed.

The goal of this assessment is to generate sample data and persist it in memory. Then create functionality using that data to query and mutate.

## Schema

See the schemas in `./lib/definitions.ts` as well as the data in `lib/data.ts`. Part of the exercise is to define a schema that encompasses p2p transactions in a concise and scalable way.

A majority of the UI has already been implemented, but there is room for addition depending on the models you implement.

```
interface Contact {
  id: number;
  name: string
  email: string
  image_url: string;
}

interface Pay {
  id: string;
  amount: number;
  // TODO: fill in 
}
```

# Required operations

1. Pays have been partially defined. Add fields you would feel relevant for querying purposes. Think of pays similar to any p2p you are familiar with. 
2. Generate random pays to and from the pre-populated contacts for the months of a single year. 
3. Incorporate into routes and pre-made UIs by building out the queries in memory.
4. Set up create and edit/action pay. (Remember, the UI will need updating per your `pay` model)
5. Commit and share! Feel free to leave notes in your thought process.

## Bonus operations

- Filtering UI
- Group pay UI

### Hints

Boot up the app. Navigate to the dashboard. Most of these cards will show empty data. 
After you generate your data, fill these in. Replace `Recent Activity` with your data.

Click to the other routes. 

`Pays` will have a table that should have more columns. `Create Pay` will probably require more fields.

`Contacts` will use the contacts we've provided but the aggregation of data you've created. 

There are `TODO`s. Try to get to them all.

## Requirements

- Node version - v18.18.0 or higher for this version of Next.js

# Candidate README
## Bootstrap instructions
To run this locally - navigate to the root directory /Current-take-home and run `pnpm dev`. It will be hosted on [localhost:3000](http://localhost:3000/) on your browser. 

## Design considerations
First on comments - I have placed comments where I felt it was necessary to elaborate on how or why something was happening - specifically on the Pay definition, and a few other helper functions. I generally believe that good code is self-commenting, so I do not tend to write broad function-level comments. That being said that is due to the work environments I have worked in, and I am not opposed to function-level comments. 

On Pays - the process of how this evolved is shown in the git comments, but I want to summarize the final version here:

-id: I settled on a UUID because it was strictly unique, and matched other data structures in the app
-pay_id: For how updates were eventually handled, I needed an id that would tie different pay entries for the same transaction - when a transaction was updated, a new entry with the new data was created, this one was deleted, but a new . While there is no frontend implementation, the idea is that a. developers can track the history of edits on a single transaction and b. later a rollback or undo function could be done for payments.
-amount: Two major design decision were made here - that negative values would represent a payment (and positive a request), and the number would represent dollars and not cents. The first decision I made for scalability in the future - large scale reporting and eventual wallet implementation are important to banking. Therefore it was easier to represent this value as how it was subtracted from the users wallet as opposed to a blank sum per record for thousands of records, where recalculation gets expensive. The second was simplicity - most representations don't require a strict tally of cents, so I felt like a two decimal was perfectly fine, and meant less math for the frontend. 
-contact_id: the id of a contact to who the money is being sent/requested from. I did change this to snake case, as I prefer snake case variables/camel case functions. Again, not a hard rule, but one that has to be consistent. 
-user_id: the user this pay "belongs" to. Allows editing of the pay, and permits scalability by creating room for multiple users. 
-create_date: UNIX timestamp for when the transaction was created (an activity date) - distinct from when the pay item itself is created. UNIX is used for all dates because it is accurate wherever you are, and simple to store - two things that seemed important for a banking app. 
-finalize_date: the UNIX timestamp for when a pay moves from pending to complete. Can be null, indicating a pending transaction. I chose this approach as opposed to having an enum or boolen for pending as this allows greater data density at a quick glance - we know not if a transaction is complete, but when. 
-update_date: The UNIX timestamp for when a pay is updated. Important for record keeping - not used in the UI, but you can see it if you debug the app through the console while it is running. 
-delete_date: The UNIX timestamp for when a pay item is deleted, or null if not deleted. Per pay item, not per transaction - if a transaction is deleted, there are simply no entries for that pay_id with a null delete date. I chose this approach to avoid actually deleting entries using deletePay or for updatePay - users should be able to create new version of pays/remove unwanted pays from their ui, but not use the application to annihilate data that the company can use (or that the user may want back someday). 

The idea behind the pays structure is that by having an insert-only design, we maintain maximum data integrity while also having the utility and scalability outlined in the initial app. This structure would make it very easy to implement pay version histories, wallets, and deliver on data reporting, internal or otherwise. 

On Card Data - I made note of this in my comments on Github, but in a real app and with more time I would have wanted pays/contacts per user to be properly cached values, and these values to be derived from such - as it stands now, each card makes its own "call" to pays/contacts to generate this data, so if I had more NextJS experience I would have done so. 

On Latest Pays - I figured this was supposed to have a limit, so I set it to six to make it line up with the activity chart, and I added the finalize date (or pending, if null) to each line so the user can also see when the latest transaction happened (or if it was still waiting to be finalized). Otherwise it is a sorted copy of pays (per above, I woudl like this to have been a memory-cached value on the clients machine, pulled once upon loading the page).

On Pays - Filtering was pretty easy, I chose to do so by matching both email and name. I expanded the data shown to the create date and finalize date (Date Paid) to provide some better identifying information that just amount and contact.

On Create/Edit Pay - I lost a lot of time to the `use client` line, but I still got a lot of what I wanted done. Ultimately there were only a few fields I felt like should be modified - no editing create_date or the id, for instance, but I did slip all the relevant id's into formData using hidden input. I recognize this is insecure in its current state, and I would have preferred to manage these in a different way if I had more time. 

  The major change here was Edit being insert only. Instead of 
    -a pay is loaded to be edited
    -the user selects their changes
    -the values are changed in place on the pay array
  We engage this process instead
    -a pay is loaded to be edited, with its pay_id and uuid passed into the function
    -the user selects their changes
    -the old version is 'deleted' i.e. its delete date is updated. 
    -a new version with the same pay_id, create_date, and user_id is created, with any changed values represented there
    -a new uuid (id) is generated for the new version, and its update_date is set to the current timestamp (we can use this to see when changes are made without updating create_date).
    -the new version is pushed onto the stack as the sole, non-deleted version of the update. 

Now we have a full record of all changes made to payments, while still allowing users to delete and change the active version of a transaction.
One thing I wish I could have done here was handle the end state better - right now it just reloads the page with the old data, and that isn't user friendly. I would have liked to implement a confirmation of a successful operation, and move them back to the main page. 

On Delete Pay - The only major decision I made here besides what I had already decided on in my data structure for Pays was to have an "Are you sure?" page with some data on the transaction before deleting it, as well as a hotlink to the Edit Page - in addition to not letting users delete actual data, it would be good to keep them from destroying their payments with an accidental misclick. 

On Activity - I chose to show this by finalize_date as opposed to create_date, so that pending transactions that might fail aren't being represented in the activity tracker. 

On Contacts - I added a user_id and a fake, non-user contact to demonstrate scalability for users/contacts, that these fields can be expanded to encompass multiple users and their contacts. 

-Potential Enhancements

-Multiple Users
  -As Contacts/Pays are already set up to be per-user, implementing multiple users/login would be the next step. 

-Wallets: Amounts are already set up in a way that makes representing a wallet ideal and easy. 

-Statements: We already have logic for generating a long record of pays, and allowing a PDF import of a months transactions could be done with the data we have, and could be requested from the app itself for maximum ease. 

-Pagination: Pagination is set up, but I never got around to fully implementing it. It would be good, especially for a user with hundreds of transactions (and interacting with and actual backend) to be able to load transactions page at a time.

-More Filter Options: expanding filters for Pays in particular to date, or Pending or Paid would also be a good, simple addition