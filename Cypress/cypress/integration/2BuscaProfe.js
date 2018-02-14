describe('Los estudiantes Busca profe', function() {
    it('Visita los estudiantes Busca profe', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()        
      
	  //Búsqueda	  
	  cy.get('.Select-placeholder').click() //.type("mario linares")
	  cy.get('.Select-input').find("input").type("mario linares", {force: true})               	    
	  cy.contains('mario linares')
    })
})