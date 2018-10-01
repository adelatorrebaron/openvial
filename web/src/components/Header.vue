<template>
  	<header class="main-header">
		<!-- Logo -->
		<router-link to="/" class="logo">
			<span class="logo-mini">
				<img src="@/assets/logo.png" class="img-circle" style="height:32px">
				</span>
			<!-- logo for regular state and mobile devices -->
			<span class="logo-lg">
				<b>Open</b>VIAL
				</span>
		</router-link>

		<!-- Header Navbar: style can be found in header.less -->
		<nav class="navbar navbar-static-top">
			<div v-if="isUserLogged" >
				<!-- Sidebar toggle button-->
				<a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
					<span class="sr-only">Toggle navigation</span>
				</a>
				<!-- Navbar Right Menu -->
				<div class="navbar-custom-menu">
					<ul class="nav navbar-nav">
						<!-- Messages: style can be found in dropdown.less-->
						<li class="dropdown messages-menu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<i class="fa fa-envelope-o"></i>
							</a>
						</li>
						
						<!-- Notifications: style can be found in dropdown.less -->
						<li class="dropdown notifications-menu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<i class="fa fa-bell-o"></i>
							</a>
						</li>

						<!-- User Account: style can be found in dropdown.less -->
						<li class="dropdown user user-menu">
							<a href="#" class="dropdown-toggle" data-toggle="dropdown">
								<img src="@/assets/user_default.png" class="user-image" alt="User Image">
								<span class="hidden-xs">{{ currentUser.username }}</span>
							</a>
							<ul class="dropdown-menu">
								<!-- User image -->
								<li class="user-header">
									<img src="@/assets/user_default.png" class="img-circle" alt="User Image">
									<p>
										{{ currentUser.username }}
										<!-- <small>Web Developer & System Admin</small> -->
									</p>
								</li>
								<!-- Menu Footer-->
								<li class="user-footer">
								<div class="pull-left">
									<router-link to="/usuario/perfil" class="btn btn-default btn-flat">Perfil</router-link>
								</div>
								<div class="pull-right">
									<router-link to="/usuario/logout" class="btn btn-default btn-flat">Logout</router-link>
								</div>
								</li>
							</ul>
						</li>

					</ul>
				</div>
			</div>
		</nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
	...mapGetters({ currentUser: 'currentUser' }),
	...mapGetters({ isUserLogged: 'isUserLogged' }),
	...mapGetters({ existAutoescuela: 'existAutoescuela' })
  }
}
</script>

<style lang="scss" scoped>

</style>