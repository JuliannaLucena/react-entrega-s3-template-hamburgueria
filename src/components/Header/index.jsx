import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"


export const Header = () => {
   const [value, setValue] = useState("");

   return (
      <header className={style.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className={style.buttonCart}>
                <MdShoppingCart size={21} />
                <span>0</span>
            </button>
            <form>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
      </header>
   );
};
