describe('Api Adopet', () =>{
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMWMzZGM4Mi0zYTExLTQ0Y2YtODA1NC1iZWU0ODRlYmM3YWIiLCJhZG9wdGVyTmFtZSI6IkZlbGlwZSBCIFNpbHZhIiwiaWF0IjoxNzQ4NTg4ODkyLCJleHAiOjE3NDg4NDgwOTJ9.taLVy9lQcBcx3RqBLdv__Kb1iOF6FZ0hAABTlrRyRTs`

  it('Mensagens da API', () =>{
    cy.request({
    method: 'GET' ,
    url: 'https://adopet-api-i8qu.onrender.com/mensagem/e1c3dc82-3a11-44cf-8054-bee484ebc7ab',
    headers: { authorization }
  }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')

    })
  })
})