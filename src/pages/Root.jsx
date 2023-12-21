// Import du composant Outlet pour gérer l'affichage des pages enfants
import { Outlet } from "react-router-dom";

export default function Root() {

  
  return (
    <>
      <Outlet />
    </>
  );
}
