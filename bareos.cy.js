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