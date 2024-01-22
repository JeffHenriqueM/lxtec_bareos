describe('Bodoquena', () => {
  it('bodoquenaRenato', () => { //Domain Controller 01 -- dados[2]
    cy.visit('https://atendimento.lxtec.com.br/login')

    cy.get(':nth-child(2) > .col-md-12 > .input-group > .form-control').type('jefferson.melo@lxtec.com.br')
    cy.get(':nth-child(3) > .col-md-12 > .input-group > .form-control').type('O8u7KonN')

    cy.get('.col-md-12 > .btn').click()

    cy.get('[href="https://atendimento.lxtec.com.br/ticket/cadastrar"]').click()

    //Telefone
    cy.get(':nth-child(1) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('telefone{enter}')

    //Cliente
    cy.get(':nth-child(2) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('bodoquena{enter}')


    //Solicitante
    cy.get(':nth-child(3) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('angela{enter}')

    //Produto
    cy.get(':nth-child(4) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('TI{enter}')

    //Categoria
    cy.get(':nth-child(6) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('esta{enter}')

    //Classificação
    cy.get(':nth-child(7) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('opera{enter}')

    //Classificação
    cy.get(':nth-child(9) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Renato{enter}')

    cy.get('.col-md-9 > .form-control').type("- -")

  })
  it('bodoquenaMario', () => { //Domain Controller 01 -- dados[2]
    cy.visit('https://atendimento.lxtec.com.br/login')

    cy.get(':nth-child(2) > .col-md-12 > .input-group > .form-control').type('jefferson.melo@lxtec.com.br')
    cy.get(':nth-child(3) > .col-md-12 > .input-group > .form-control').type('O8u7KonN')

    cy.get('.col-md-12 > .btn').click()

    cy.get('[href="https://atendimento.lxtec.com.br/ticket/cadastrar"]').click()

    //Telefone
    cy.get(':nth-child(1) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('telefone{enter}')

    //Cliente
    cy.get(':nth-child(2) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('bodoquena{enter}')


    //Solicitante
    cy.get(':nth-child(3) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('angela{enter}')

    //Produto
    cy.get(':nth-child(4) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('TI{enter}')

    //Categoria
    cy.get(':nth-child(6) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('esta{enter}')

    //Classificação
    cy.get(':nth-child(7) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('opera{enter}')

    //Classificação
    cy.get(':nth-child(9) > .col-md-8 > .select2-container > .selection > .select2-selection > .select2-selection__arrow').click()
    cy.wait(300)
    cy.get('.select2-dropdown > .select2-search > .select2-search__field').type('Mario Gustavo{enter}')

    cy.get('.col-md-9 > .form-control').type("- -")

  })
}) 