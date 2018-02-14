describe('Los estudiantes ir profe', function() {
    it('Visita los estudiantes ir profe', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()        
      
	  //Búsqueda	  
	  cy.get('.Select-placeholder').click() //.type("mario linares")
	  cy.get('.Select-input').find("input").type("mario linares", {force: true})               	    
	  	  
	  //Ir a la página
	  cy.get('#react-select-required_error_checksum--option-0').click({force: true})
	  	  
	  //cy.get('.jsx-331433728')
	  cy.contains('Mario Linares Vasquez')   	  
    })
})