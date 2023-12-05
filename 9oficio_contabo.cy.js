describe('My First Test', () => {
  var dados = []
  var bkpFull = {}

  it('job_srvbd01', () => { //Domain Controller 01 -- dados[2]
    cy.visit('http://154.53.53.33/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.53.53.33/bareos-webui/job/index?jobname=job_srvbd01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(3000)

    pegarDados('job_srvdc01')
   
  })

  it('job_srvarqII', () => {
    cy.visit('http://154.53.53.33/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.53.53.33/bareos-webui/job/index?jobname=job_srvarq')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvarq')

  })

  it('BackupCatalog', () => {
    cy.visit('http://154.53.53.33/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.53.53.33/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })


  it('backup-bareos-fd', () => {
    cy.visit('http://154.53.53.33/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.53.53.33/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + '9OficioContabo_' + dataAtual + '.json', dados)

  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = '9OficioContabo_' + name

    //Pegar dados último Full
    cy.get('[data-index="0"] > :nth-child(8)').then(function (e) {
      const dataEnd = e.text()
      cy.get('[data-index="0"] > :nth-child(13)').then(function (e) {
        const success = e.text()
        if (success == "Success") {
          //Método responsável por verificar se não há nenhum erro
          cy.get('[data-index="0"] > :nth-child(12)').then(function (e) {
            const erros = Number(e.text())
            bkpFull.errosFull = e.text();
            if (erros == 0) {
              cy.get('[data-index="0"] > :nth-child(2)').then(function (e) {
                const id = e.text()
                bkpFull.id = id
              })
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e){
                const tamanhoArquivo = e.text()
                bkpFull.tamanho = tamanhoArquivo
              })
              cy.get('[data-index="0"] > :nth-child(7)').then(function (e) {
                const dataInicio = e.text()
                bkpFull.dataInicio = dataInicio
              })
              cy.get('[data-index="0"] > :nth-child(8)').then(function (e) {
                const dataFim = e.text()
                bkpFull.dataFim = dataFim
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
  }

})