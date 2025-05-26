import {faker} from "@faker-js/faker";


Cypress.Commands.add('sendRequest', (url, method, body =null) => {

    cy.request({
        url: url,
        method: method,
        headers: {
            'Authorization': 'pk_200410700_GVDIOO120NEDANQ7FA3UYJFJO7X5UW9K',
            'Content-Type': 'application/json'
        },
        failOnStatusCode: false,
        body: body
    })

})

Cypress.Commands.add('getGoals', () => {
    cy.sendRequest('team/90151212666/goal', 'GET')
})

Cypress.Commands.add('getGoal', (id) => {
    cy.sendRequest('goal/'+id, 'GET')
})

Cypress.Commands.add('createGoal', () => {
    cy.sendRequest('team/90151212666/goal', 'POST',  {'name': faker.person.lastName()})
})

Cypress.Commands.add('deleteGoal', (id) => {
    cy.sendRequest(`goal/`+id, 'DELETE')
})

Cypress.Commands.add('updateGoal', (id) => {

    cy.get('@goalId2').then((id) => {
        cy.sendRequest('goal/'+id, 'PUT', {'name': faker.person.firstName()})
    })
})