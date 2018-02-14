describe('Los estudiantes filtro materia', function() {
    it('Visita los estudiantes filtro materia', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()        
      
	  //Búsqueda	  
	  cy.get('.Select-placeholder').click() //.type("mario linares")
	  cy.get('.Select-input').find("input").type("mario linares", {force: true})               	    
	  	  
	  //Ir a la página
	  cy.get('#react-select-required_error_checksum--option-0').click({force: true})
	  	  
	  cy.get('.jsx-331433728')
	  
	  
	  cy.get('.jsx-3367902293').contains('Estructuras Datos').click()
	  
	  cy.contains('Profesores de esta materia')
	  
    })
})