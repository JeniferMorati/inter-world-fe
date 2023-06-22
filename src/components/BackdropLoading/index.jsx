import { Dna } from "react-loader-spinner";

// atoms: components
import * as Atom from "./style";

const BackdropLoading = ({ open }) => {
  if (open) {
    return (
      <Atom.BackDrop>
        <Dna height="80" width="80" ariaLabel="loading-indicator" />
      </Atom.BackDrop>
    );
  }

  return null;
};

export default BackdropLoading;
