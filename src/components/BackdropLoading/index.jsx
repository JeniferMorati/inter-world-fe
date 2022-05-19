import { Plane } from "react-loader-spinner";

// atoms: components
import * as Atom from "./style";

const BackdropLoading = ({ open }) => {
  if (open) {
    return (
      <Atom.BackDrop>
        <Plane
          secondaryColor="rgba(var(--mdb-secondary-rgb)"
          color="rgba(var(--mdb-secondary-rgb)"
          ariaLabel="loading-indicator"
        />
      </Atom.BackDrop>
    );
  }

  return null;
};

export default BackdropLoading;
