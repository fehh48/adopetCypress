describe('Api Adopet', () =>{
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMWMzZGM4Mi0zYTExLTQ0Y2YtODA1NC1iZWU0ODRlYmM3YWIiLCJhZG9wdGVyTmFtZSI6IkZlbGlwZSBCIFNpbHZhIiwiaWF0IjoxNzQ4NTg4NjgyLCJleHAiOjE3NDg4NDc4ODJ9.1UAffqdZTAfSVrJRrXM-Ipa6YvmRp3KhXr78_NwZDvc`

  it('Mensagens da API', () =>{
    cy.request({
    method: 'GET' ,
    url: 'https://adopet-api-i8qu.onrender.com/mensagem/e1c3dc82-3a11-44cf-8054-bee484ebc7ab',
    Headers: { authorization }
  }).then((res) => {
        expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')

    })
  })
})