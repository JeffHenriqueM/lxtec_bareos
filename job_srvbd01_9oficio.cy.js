describe('My First Test', () => {
    var dados = []

    it('full', () => {
        cy.visit('http://189.52.219.98:53080/bareos-webui/')
        cy.get('input[name="consolename"]').type('admin')
        cy.get('input[name="password"]').type('ViQUingue')
        cy.contains('Login').click()

        cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=job_srvarqII')
        cy.wait(3000)

        cy.get('[placeholder="Level"]').type('full')
        cy.wait(500)

        var bkpFull = {}
        bkpFull.title='job_srvarqII'
        //Pegar dados último Full
        cy.get('[data-index="0"] > :nth-child(8)').then(function (e) {
            const dataEnd = e.text()

            cy.get('[data-index="0"] > :nth-child(13)').then(function (e) {
                const success = e.text()
                if (success == "Success") {
                    //Método responsável por verificar se não há nenhum erro
                    cy.get('[data-index="0"] > :nth-child(12)').then(function (e) {
                        const erros = Number(e.text())
                        bkpFull.errosFull = erros;
                        if (erros == 0) {
                            cy.get('[data-index="0"] > :nth-child(2)').then(function (e) {
                                const id = e.text()
                                bkpFull.id = id
                            })
                            cy.get('[data-index="0"] > :nth-child(7)').then(function (e) {
                                const dataInicio = e.text()
                                bkpFull.dataInicio = dataInicio
                            })
                            cy.get('[data-index="0"] > :nth-child(8)').then(function (e) {
                                const dataFim = e.text()
                                bkpFull.dataFim = new Date(dataFim)
                                dataBkpFull = new Date(dataFim)
                            })
                            bkpFull.full = true
                            bkpFull.notes = "OK"
                        } else {
                            bkpFull.full = false
                            bkpFull.notes = "Erros : " + erros
                        }
                    })
                } else {
                    bkpFull.full = false
                    bkpFull.notes = "Backup full com erros"
                }
            })
            dados.push(bkpFull)
        })
        cy.readFile('cypress/fixtures/dados.json').then((user) => {
            dados.push(user)
            cy.writeFile('cypress/fixtures/dados.json', dados)
        })
        
    })

    it('job_srvdc01', () => { //Domain Controller 01 -- dados[2]
        cy.visit('http://189.52.219.98:53080/bareos-webui/')
        cy.get('input[name="consolename"]').type('admin')
        cy.get('input[name="password"]').type('ViQUingue')
        cy.contains('Login').click()
    
        cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=job_srvdc01')
        cy.wait(3000)
    
        cy.get('tbody').find('tr').each(($el, $index) => {
          var bkp = {
          }
          bkp.title = 'job_srvdc01'
    
          var text = '[data-index="' + $index + '"] > :nth-child(13)'
          cy.get(text).then(function (e) {
            const success = e.text()
            if (success == "Success") {
              //Método responsável por verificar se não há nenhum erro
              text = '[data-index="' + $index + '"] > :nth-child(12)'
              cy.get(text).then(function (e) {
                const erros = Number(e.text())
                bkp.errosFull = erros;
                if (erros == 0) {
                  cy.get('[data-index="' + $index + '"] > :nth-child(2)').then(function (e) {
                    const id = e.text()
                    bkp.id = id
                  })
                  cy.get('[data-index="' + $index + '"] > :nth-child(7)').then(function (e) {
                    const dataInicio = e.text()
                    bkp.dataInicio = dataInicio
                  })
                  cy.get('[data-index="' + $index + '"] > :nth-child(8)').then(function (e) {
                    const dataFim = e.text()
                    bkp.dataFim = dataFim
                  })
                  bkp.full = true
                  bkp.notes = "OK"
                } else {
                  bkp.full = false
                  bkp.notes = "Erros : " + erros
                }
              })
            } else {
              bkp.full = false
              bkp.notes = "Backup full com erros"
            }
          })
          dados.push(bkp)
        })
      })
})