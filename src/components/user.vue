<template>
<!-- User Menu -->
                    <li class="nav-item dropdown has-arrow main-drop">
                        <a href="javascript:void(0)" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                            <span class="user-img">
                                <img src="../assets/img/profiles/avatar-01.jpg" alt="">
                                <span class="status online"></span>
                            </span>
                        <span class="adminmodule"> Admin</span>
                        </a>
                        <div class="dropdown-menu">
                            <router-link class="dropdown-item" to="/profile"><i data-feather="user" class="me-1"></i> Profile</router-link>
                            <router-link class="dropdown-item" to="/settings"><i data-feather="settings" class="me-1"></i> Settings</router-link>
                            <router-link class="dropdown-item" to="/"><i data-feather="log-out" class="me-1"></i> Logout</router-link>
                        </div>
                    </li>
                    <!-- /User Menu -->
</template>