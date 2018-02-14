describe('Los estudiantes login correcto', function() {
    it('Visita los estudiantes login correcto', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      
      cy.contains('Ingresar').click()
      cy.get('.cajaLogIn').find('input[name="correo"]').click().type("fe.bolivar@uniandes.edu.co")
      cy.get('.cajaLogIn').find('input[name="password"]').click().type("fabiobolivar")
      cy.get('.cajaLogIn').contains('Ingresar').click()
      cy.contains('Busca y califica profesores')
    })
})