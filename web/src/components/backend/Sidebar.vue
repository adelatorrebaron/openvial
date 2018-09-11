<template>
 	<!-- Left side column. contains the logo and sidebar -->
  	<aside class="main-sidebar">

		<!-- Sidebar user panel -->
      	<div class="user-panel" style="background-color: #367fa9">
			<div class="text-center" >
				<img src="@/assets/logo.png" style="width:130px">
			</div>
      	</div>

      	<!-- /.search form -->
      	<!-- sidebar menu: : style can be found in sidebar.less -->
      	<ul class="sidebar-menu" data-widget="tree">
			<li class="header">NAVEGACION PRINCIPAL</li>
			<li>
				<router-link to="/dashboard">
					<i class="fa fa-dashboard"></i>
					<span>Dashboard</span>
				</router-link>
			</li>
			<li>
				<router-link to="/autoescuela">
					<i class="fa fa-building"></i>
					<span>Autoescuela</span>
				</router-link>
			</li>
			<li>
				<router-link to="/profesores">
					<i class="fa fa-address-card"></i>
					<span>Profesores</span>
				</router-link>
			</li>
			<li>
				<router-link to="/cursos">
					<i class="fa fa-calendar"></i>
					<span>Cursos</span>
				</router-link>
			</li>
			<li>
				<router-link to="/alumnos">
					<i class="fa fa-users"></i>
					<span>Alumnos</span>
				</router-link>
			</li>		
			<li>
				<router-link to="/pagos">
					<i class="fa fa-calculator"></i>
					<span>Pagos</span>
				</router-link>
			</li>
			<li>
				<router-link to="/vehiculos">
					<i class="fa fa-car"></i>
					<span>Vehículos</span>
				</router-link>
			</li>
			<li>
				<router-link to="/clases">
					<i class="fa fa-calendar-check-o"></i>
					<span>Clases</span>
				</router-link>
			</li>

        	<li class="treeview">
				<i class="fa fa-files-o"></i>
				<span>Informes</span>
				<span class="pull-right-container">
					<i class="fa fa-angle-left pull-right"></i>
				</span>
          		<ul class="treeview-menu">
            		<li>
						<router-link to="/informes/autoescuela">
							<i class="fa fa-building"></i>
							<span>Autoescuela</span>
						</router-link>
					</li>
					<li>
						<router-link to="/informes/profesores">
							<i class="fa fa-address-card"></i>
							<span>Profesores</span>
						</router-link>
					</li>
					<li>
						<router-link to="/informes/cursos">
							<i class="fa fa-calendar"></i>
							<span>Cursos</span>
						</router-link>
					</li>
					<li>
						<router-link to="/informes/alumnos">
							<i class="fa fa-users"></i>
							<span>Alumnos</span>
						</router-link>
					</li>					
					<li>
						<router-link to="/informes/pagos">
							<i class="fa fa-calculator"></i>
							<span>Pagos</span>
						</router-link>
					</li>	
					<li>
						<router-link to="/informes/vehiculos">
							<i class="fa fa-car"></i>
							<span>Vehiculos</span>
						</router-link>
					</li>
					<li>
						<router-link to="/informes/clases">
							<i class="fa fa-calendar-check-o"></i>
							<span>Clases</span>
						</router-link>
					</li>

          		</ul>
        	</li>

      	</ul>
    <!-- /.sidebar -->
  	</aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  computed: {
	...mapGetters({ currentUser: 'currentUser'})
  }
}
</script>

<style lang="scss" scoped>
</style>