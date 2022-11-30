<template>
    <li class="nav-item dropdown has-arrow flag-nav">
        <a class="nav-link dropdown-toggle dropdown-toggle-four" data-bs-toggle="dropdown" href="javascript:void(0)" role="button">
            <img src="../../../assets/img/flags/us-one.png" alt="" height="20"> <span class="me-1">English</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../../assets/img/flags/us.png" alt="" height="16"> English
            </a>
            <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../../assets/img/flags/fr.png" alt="" height="16"> French
            </a>
            <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../../assets/img/flags/es.png" alt="" height="16"> Spanish
            </a>
            <a href="javascript:void(0);" class="dropdown-item">
                <img src="../../../assets/img/flags/de.png" alt="" height="16"> German
            </a>
        </div>
    </li>
<!-- User Menu -->
<li class="nav-item dropdown has-arrow main-drop">
    <a href="javascript:void(0)" class="dropdown-toggle dropdown-toggle-four nav-link" data-bs-toggle="dropdown">
        <span class="user-img">
            <img src="../../../assets/img/profiles/avatar-14.png" alt="">
            <span class="status online me-1"></span>
        </span>
        <span class="me-1">Admin</span>
    </a>
    <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/profile"><i data-feather="user" class="me-1"></i> Profile</router-link>
        <router-link class="dropdown-item" to="/settings"><i data-feather="settings" class="me-1"></i> Settings</router-link>
        <router-link class="dropdown-item" to="/"><i data-feather="log-out" class="me-1"></i> Logout</router-link>
    </div>
</li>
<!-- /User Menu -->
</template>