describe('9Oficio', () => {
  var dados = []
  var bkpFull = {}

  it('job_srvdc01', () => { //Domain Controller 01 -- dados[2]
    cy.visit('http://189.52.219.98:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=job_srvdc01')
    cy.wait(3000)

    pegarDados('job_srvdc01')

  })

  it('job_srvbd01', () => {

    cy.visit('http://189.52.219.98:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=job_srvbd01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvbd01')

  })

  it('job_srvarqII', () => {
    cy.visit('http://189.52.219.98:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=job_srvarqII')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvarqII')

  })

  it('BackupCatalog', () => {
    cy.visit('http://189.52.219.98:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })

  it('backup-bareos-fd', () => {
    cy.visit('http://189.52.219.98:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.52.219.98:53080/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')

    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'geral_' + dataAtual + '.json', dados)

  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = '9Oficio_' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('9Oficio_contabo', () => {
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

    /*Gambiarra, ler todos os arquivos e criar um novo
        var array = []
        cy.fixture('9oficio_06_12_2023').then((json1) => {
          for(var i in json1)
          console.clear()
          console.log(json1[i])
              array.push([i, json1[i]]);
          cy.fixture('9OficioContabo_06_12_2023').then((json2) => {
            for(var i in json2)
              array.push([i, json2[i]]);
          })
        console.log(array)
        })
        cy.writeFile('cypress/fixtures/' + 'ultimo.json', array)*/
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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }


})

describe('ADAMES', () => {
  var dados = []
  var bkpFull = {}

  it('job_svmcont', () => {
    cy.visit('http://189.59.92.130:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.59.92.130:53080/bareos-webui/job/index?jobname=job_svmcont')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(3000)

    pegarDados('job_svmcont')

  })

  it('job_sfdb01', () => {
    cy.visit('http://189.59.92.130:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.59.92.130:53080/bareos-webui/job/index?jobname=job_sfdb01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_sfdb01')

  })

  it('job_srvad01', () => {
    cy.visit('http://189.59.92.130:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.59.92.130:53080/bareos-webui/job/index?jobname=job_srvad01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvad01')

  })

  it('BackupCatalog', () => {
    cy.visit('http://189.59.92.130:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.59.92.130:53080/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })


  it('backup-bareos-fd', () => {
    cy.visit('http://189.59.92.130:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://189.59.92.130:53080/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'ADAMES_' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'ADAMES_' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})
describe('AgricolaPanorama', () => {
  var dados = []
  var bkpFull = {}

  it('job_sfad01245', () => {
    cy.visit('http://179.48.245.22:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.48.245.22:53080/bareos-webui/job/index?jobname=job_sfad01245')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_sfad01245')

  })

  it('RestoreFiles', () => {
    cy.visit('http://179.48.245.22:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.48.245.22:53080/bareos-webui/job/index?jobname=RestoreFiles')

    cy.get('[placeholder="Level"]').type('full')
    cy.get('[style="left: 36%;"]').click()
    cy.wait(500)

    pegarDados('RestoreFiles')

  })

  it('BackupCatalog', () => {
    cy.visit('http://179.48.245.22:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.48.245.22:53080/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })


  it('backup-bareos-fd', () => {
    cy.visit('http://179.48.245.22:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.48.245.22:53080/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'AgricolaPanorama_' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'AgricolaPanorama_' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('Discautol', () => {
  var dados = []
  var bkpFull = {}

  it('job_srvcrdts01', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=job_srvcrdts01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvcrdts01')

  })
  it('job_srvcrdts02', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=job_srvcrdts02')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvcrdts02')

  })

  it('job_srvcrdts03', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=job_srvcrdts03')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvcrdts03')
  })

  it('job_sfad0102', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=job_sfad0102')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_sfad0102')

  })

  it('job_srvcrdcon01', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=job_srvcrdcon01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvcrdcon01')

  })


  it('BackupCatalog', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })


  it('backup-bareos-fd', () => {
    cy.visit('http://179.185.91.250:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://179.185.91.250:53080/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'Discautol_' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'Discautol_' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('GraficaPex-Bancos', () => {
  var dados = []
  var bkpFull = {}

  it('job_pexonline', () => {
    cy.visit('http://177.174.43.235:53081/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://177.174.43.235:53081/bareos-webui/job/index?jobname=job_pexonline')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pexonline')

  })

  it('job_srvdb02', () => {
    cy.visit('http://177.174.43.235:53081/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://177.174.43.235:53081/bareos-webui/job/index?jobname=job_srvdb02')

    cy.get('[placeholder="Level"]').type('full')
    cy.get('[style="left: 36%;"]').click()
    cy.wait(500)

    pegarDados('job_srvdb02')

  })

  it('BackupCatalog', () => {
    cy.visit('http://177.174.43.235:53081/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://177.174.43.235:53081/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })


  it('backup-bareos-fd', () => {
    cy.visit('http://177.174.43.235:53081/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://177.174.43.235:53081/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'GraficaPex-Bancos_' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'GraficaPex-Bancos_' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('Hospital_dos_Olhos_Dourados', () => {
  var dados = []
  var bkpFull = {}

  it('job_sfishy01', () => {
    cy.visit('http://170.254.139.33:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://170.254.139.33:53080/bareos-webui/job/index?jobname=job_sfishy01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_sfishy01')

  })

  it('job_sdchod01', () => {
    cy.visit('http://170.254.139.33:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://170.254.139.33:53080/bareos-webui/job/index?jobname=job_sdchod01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_sdchod01')

  })
  it('job_sdbhod01', () => {
    cy.visit('http://170.254.139.33:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://170.254.139.33:53080/bareos-webui/job/index?jobname=job_sdbhod01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_sdbhod01')

  })
  it('job_est-oct-01', () => {
    cy.visit('http://170.254.139.33:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://170.254.139.33:53080/bareos-webui/job/index?jobname=job_est-oct-01')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_est-oct-01')

  })

  it('BackupCatalog', () => {
    cy.visit('http://170.254.139.33:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://170.254.139.33:53080/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })


  it('backup-bareos-fd', () => {
    cy.visit('http://170.254.139.33:53080/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://170.254.139.33:53080/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'Hospital_dos_Olhos_Dourados_' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'Hospital_dos_Olhos_Dourados' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('Lxtec_(Data_Center)', () => {
  var dados = []
  var bkpFull = {}

  it('job_vitoriamtzbd', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_vitoriamtzbd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_vitoriamtzbd')

  })
  it('job_srvdb01_realh', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_srvdb01_realh')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvdb01_realh')

  })
  it('job_svpmanastacio01_dtc', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_svpmanastacio01_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svpmanastacio01_dtc')

  })
  it('job_svpmppora03_dtc', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_svpmppora03_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svpmppora03_dtc')

  })
  it('job_svpmppora01_dtc', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_svpmppora01_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svpmppora01_dtc')

  })
  it('job_vitoriamtzad', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_vitoriamtzad')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_vitoriamtzad')

  })
  it('job_svpmchapadao01_dtc', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_svpmchapadao01_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svpmchapadao01_dtc')

  })
  it('job_svpmselviria01_dtc', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_svpmselviria01_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svpmselviria01_dtc')

  })
  it('job_svpmaquidauana01_dtc', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_svpmaquidauana01_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svpmaquidauana01_dtc')

  })
  it('Consolidate', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=Consolidate')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('Consolidate')

  })
  it('job_srvdb_carmju', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_srvdb_carmju')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvdb_carmju')

  })
  it('job_srvdb_carbodo', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=job_srvdb_carbodo')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvdb_carbodo')

  })

  it('RestoreFiles', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=RestoreFiles')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('RestoreFiles')

  })

  it('BackupCatalog', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })

  it('backup-bareos-fd', () => {
    cy.visit('http://172.16.0.11/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://172.16.0.11/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'Lxtec_Data_Center' + dataAtual + '.json', dados)
  })
  
  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'Lxtec_Data_Center' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('Lxtec (Contabo)', () => {
  var dados = []
  var bkpFull = {}

  it('job_pminocencia_dtc', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pminocencia_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pminocencia_dtc')

  })

  it('job_pmselviria01_dtc', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmselviria01_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmselviria01_dtc')

  })

  it('job_pmaquidauana_dtc', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmaquidauana_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmaquidauana_dtc')

  })

  it('job_pmanastacio_dtc', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmanastacio_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmanastacio_dtc')

  })

  it('job_pmparanaibactrl', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmparanaibactrl')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmparanaibactrl')

  })

  it('job_gecondb_dtc', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_gecondb_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_gecondb_dtc')

  })

  it('job_svdck0106', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_svdck0106')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_svdck0106')

  })

  it('job_pmchapadao_dtc', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmchapadao_dtc')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmchapadao_dtc')

  })
  
  it('job_pmsidrolandiactrl', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmsidrolandiactrl')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmsidrolandiactrl')

  })

  it('job_pmitaporactrl', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmitaporactrl')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmitaporactrl')

  })

  it('job_pmselviriactrl', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmselviriactrl')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmselviriactrl')

  })
  
  it('job_pmbataguassuctrl', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmbataguassuctrl')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmbataguassuctrl')

  })

  it('job_pmamambaictrl', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=job_pmamambaictrl')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_pmamambaictrl')

  })

  it('BackupCatalog', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })

  it('backup-bareos-fd', () => {
    cy.visit('http://154.38.167.81/bareos-webui/dashboard/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://154.38.167.81/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'Lxtec_Contabo' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'Lxtec_Contabo' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})

describe('Lxtec (Contabo)', () => {
  var dados = []
  var bkpFull = {}

  it('job_srvdb_pex', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=job_srvdb_pex')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_srvdb_pex')

  })
  it('job_vmi200530', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=job_vmi200530')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_vmi200530')

  })

  it('job_vmi1301197', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=job_vmi1301197')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('job_vmi1301197')

  })

  it('Consolidate', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=Consolidate')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('Consolidate')

  })

  it('CopyLongtermFull', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')
    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=CopyLongtermFull')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('CopyLongtermFull')

  })

  it('BackupCatalog', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')

    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=BackupCatalog')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('BackupCatalog')

  })

  it('backup-bareos-fd', () => {
    cy.visit('http://173.249.27.152/bareos-webui/')

    cy.get('input[name="consolename"]').type('admin')
    cy.get('input[name="password"]').type('ViQUingue')
    cy.contains('Login').click()

    cy.visit('http://173.249.27.152/bareos-webui/job/index?jobname=backup-bareos-fd')

    cy.get('[placeholder="Level"]').type('full')
    cy.wait(500)

    pegarDados('backup-bareos-fd')
    var dataAtual = new Date()
    dataAtual = dataAtual.toLocaleDateString().replaceAll('/', '_')

    cy.writeFile('cypress/fixtures/' + 'Lxtec_Contabo' + dataAtual + '.json', dados)
  })

  function pegarDados(name) {
    bkpFull = {}
    bkpFull.title = 'Lxtec_Contabo' + name

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
              cy.get('[data-index="0"] > :nth-child(11)').then(function (e) {
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
          bkpFull.notes = success
        }
      })
      dados.push(bkpFull)
    })
  }
})