describe('Los estudiantes CrearCuenta', function() {
    it('ir a los estudiantes and crear cuenta', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
	  
	  cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Fabio")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("Bolivar")
	  cy.get('.cajaSignUp').find('input[name="correo"]').click().type("fe.bolivar@uniandes.edu.co")
	  //Seleccionar U
	  cy.get('.cajaSignUp').find('select[name="idUniversidad"]').select('universidad-de-los-andes')
	  //Checkbox de Maestria
	  cy.get('.cajaSignUp').find('[type="checkbox"]').check() 
	  //Seleccionar maestria
	  cy.get('.cajaSignUp').find('select[name="idPrograma"]').select('15')       
	  cy.get('.cajaSignUp').find('input[name="password"]').click().type("fabiobolivar")
	  
	  //Click en el boton de registro
	  cy.get('.cajaSignUp').contains('Registrarse').click()
	  
	  //Usuario ya registrado con ese correo
      cy.contains('Ya existe un usuario registrado')
    })
})