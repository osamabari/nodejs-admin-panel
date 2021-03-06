var admin_router = require( helpers.generate_public_path( "app/modules/admin/router" ) );
var session_router = require( helpers.generate_public_path( "app/modules/authentication/router" ) );
var api_router = require( helpers.generate_public_path( "app/modules/api/router" ) );

/**
 * @brief Implements entry point for all application routes.
 */
var Router = ( function() {
	// private scope
	
	/**
	 * @brief Registers admin routes.
	 */
	var registerAdminRoutes = function( application ) {
		admin_router.registerRoutes( application );
	};

	/**
	 * @brief Registers session routes like login, logout.
	 */
	var registerSessionRouter = function( application ) {
		session_router.registerRoutes( application );
	};

	/**
	 * @brief Registers JSON api routes.
	 */
	var regiterApiRouter = function( application ) {
		api_router.registerRoutes( application );
	};

	return {
		/**
		 * @brief Fake constructor.
		 */
		init : function() {},
		
		/**
		 * @brief Registers application routes.
		 *
		 * @param[in] Object application is the application instance
		 */
		registerRoutes : function( application ) {
			registerAdminRoutes( application );
			registerSessionRouter( application );
			regiterApiRouter( application );
		}
	}
} )();

module.exports = Router;
