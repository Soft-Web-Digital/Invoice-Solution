<template>

    	<!-- Main Wrapper -->

		<div class="main-wrapper">

            <layout-header></layout-header>

			<layout-sidebar></layout-sidebar>
			
			<!-- Page Wrapper -->

			<div class="page-wrapper">

				<div class="content container-fluid">
				
				    <expenseheader />
					
			        <expensefilter />
					
					<div class="row">

						<div class="col-sm-12">

							<div class="card card-table"> 

								<div class="card-body">

									<div class="table-responsive">

										<expensetable />

									</div>

								</div>

							</div>

						</div>

					</div>

				</div>

			</div>

			<!-- /Page Wrapper -->
			
		</div>
		<!-- /Main Wrapper -->
		
</template>
<script>
import expenses from '../../../assets/json/expenses.json';
const images = require.context('../../../assets/img/profiles', false, /\.png$|\.jpg$/)
export default {
	data() {
		return {
			expenses: expenses
		}
	},
	mounted() {
	},
	methods: {
        loadImg(imgPath) {
            return images('./' + imgPath).default
        }
    },
}
</script>