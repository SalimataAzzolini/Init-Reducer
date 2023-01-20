import { configureStore } from '@reduxjs/toolkit';
/* 
Dans l’objet passé en argument à cette méthode, on retrouve la propriété reducer qui contiendra
nos reducers. D’autres propriétés peuvent être ajoutées ici pour configurer le store */

const store = configureStore({
reducer: {}
});
export default store;