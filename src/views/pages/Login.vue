<template>
		<!-- Main Wrapper -->
		<div class="main-wrapper login-body">
			<div class="login-wrapper">
				<div class="container">
				
					<img class="img-fluid logo-dark mb-2" src="../../assets/img/logo.png" alt="Logo">
					<div class="loginbox">
						
						<div class="login-right">
							<div class="login-right-wrap">
								<h1>Login</h1>
								<p class="account-subtitle">Access to our dashboard</p>
								
								<Form class="login" @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
									<div class="form-group">
										<label class="form-control-label">Email Address</label>
										<Field name="email" type="text" value="admin@dreamguys.in" class="form-control mt-2" :class="{ 'is-invalid': errors.email }" />
                                        <div class="invalid-feedback">{{errors.email}}</div>
                                        <div class="emailshow text-danger" id="email"></div>
									</div>
									<div class="form-group">
										<label class="form-control-label">Password</label>
										<div class="pass-group">
											<Field name="password" type="password" value="123456" class="form-control pass-input mt-2" :class="{ 'is-invalid': errors.password }" /><span class="fa fa-eye-slash toggle-password pt-4"></span>
                                            <div class="invalid-feedback">{{errors.password}}</div>
                                            <div class="emailshow text-danger" id="password"></div>
										</div>
									</div>
									<div class="form-group">
										<div class="row">
											<div class="col-6">
												<div class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" id="cb1">
													<label class="custom-control-label ms-1" for="cb1">Remember me</label>
												</div>
											</div>
											<div class="col-6 text-end">
												<router-link class="forgot-link" to="/forgot-password">Forgot Password ?</router-link>
											</div>
										</div>
									</div>
									<button class="btn btn-lg btn-block btn-primary w-100" type="submit" value="Login">Login</button>
									<div class="login-or">
										<span class="or-line"></span>
										<span class="span-or">or</span>
									</div>
									<!-- Social Login -->
									<div class="social-login mb-3">
										<span>Login with</span>
										<a href="javascript:void(0)" class="facebook"><i class="fab fa-facebook-f"></i></a><a href="javascript:void(0)" class="google"><i class="fab fa-google"></i></a>
									</div>
									<!-- /Social Login -->
									<div class="text-center dont-have">Don't have an account yet? <router-link to="/register">Register</router-link></div>
								</Form>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Main Wrapper -->
</template>
<script>
import { ref } from 'vue'
import { router } from '../../router';
import VueRouter from 'vue-router'
import { useStore } from 'vuex'
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
export default {
  components: {
        Form,
        Field,
    },
    mounted() {
    if($('.toggle-password').length > 0) {
    $(document).on('click', '.toggle-password', function() {
      $(this).toggleClass("fa-eye fa-eye-slash");
      var input = $(".pass-input");
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
  }
  },
setup() {
  let users = localStorage.getItem('storedData');
    if (users === null) {
      let password = [
        {
          email: 'admin@dreamguys.in',
          password: '123456',
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem('storedData', jsonData);
    }
     const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        });
    const onSubmit = (values) => {
    document.getElementById("email").innerHTML = ""
    document.getElementById("password").innerHTML = ""
    let data = localStorage.getItem('storedData');
      var Pdata= JSON.parse(data)
      const Eresult= Pdata.find(({ email }) => email === values.email);
     if (Eresult) {
      if (Eresult.password === values.password) {
      router.push('/index')  
      } else {
          document.getElementById("password").innerHTML = "Incorrect password"
      }
    } else {
          document.getElementById("email").innerHTML = "Email is not valid"
    }
          };
        return {
            schema,
            onSubmit,
        };

    }


}
</script>
<style>
</style>