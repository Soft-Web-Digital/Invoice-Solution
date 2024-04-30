import { computed } from "vue";
import { useStore } from "vuex";



export const getPermissions = computed(() => {
    const store = useStore();
    return store.getters["auth/permissions"];
});

export function sortPermission(permissionCheck) {
  
    return permissionCheck.some(permission => 
        getPermissions.value.includes(permission)
        );
}
