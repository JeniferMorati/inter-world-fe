import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useState, memo } from "react";
import { Plane } from "react-loader-spinner";
import ReactStars from "react-rating-stars-component";
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { selectorGetRatingUsers } from "../../store/selectors";
import { MOCK_USER_RATING } from "./mocks";

const Reating = () => {
  // recoil: loadable
  const usersRatingLoadable = useRecoilValueLoadable(selectorGetRatingUsers);
  const retryUsersRatingLoadable = useRecoilRefresher_UNSTABLE(
    selectorGetRatingUsers
  );

  // local: states
  const [usersList, setUsersList] = useState([]);

  // mocks
  const comments = MOCK_USER_RATING;

  useEffect(() => {
    if (usersRatingLoadable.state === "hasValue") {
      setUsersList(usersRatingLoadable.contents);
    }
  }, [usersRatingLoadable.state]);

  if (usersRatingLoadable.state === "hasError") {
    return (
      <div className="d-flex flex-column gap-4 justify-content-center align-items-center">
        Ocorreu um erro inesperado
        <MDBBtn color="secondary" onClick={() => retryUsersRatingLoadable()}>
          Tentar novamente
        </MDBBtn>
      </div>
    );
  }

  if (usersList && usersRatingLoadable.state === "hasValue") {
    return (
      <>
        {usersList?.map((item, index) => (
          <div className="col-md-4 mb-5 mb-md-0" key={item?.id?.value}>
            <div className="d-flex justify-content-center mb-4">
              <img
                src={item?.picture?.large}
                className="rounded-circle shadow-1-strong"
                width="150"
                height="150"
              />
              {console.log(comments)}
            </div>
            <h5 className="mb-3">
              {item?.name?.first} {item?.name?.last}
            </h5>
            <h6 className="text-secondary mb-3">
              {comments[index]?.occupation}
            </h6>
            <p className="px-xl-3">
              <i className="fas fa-quote-left pe-2"></i>
              {comments[index]?.comment}
            </p>
            <ul className="list-unstyled d-flex justify-content-center mb-0">
              <ReactStars
                count={5}
                value={comments[index]?.rating}
                edit={false}
                isHalf={true}
                size={14}
                color="rgba(var(--mdb-warning-rgb)"
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fas fa-star-half-alt"></i>}
                filledIcon={<i className="fas fa-star"></i>}
                activeColor="rgba(var(--mdb-warning-rgb)"
              />
            </ul>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Plane
        secondaryColor="rgba(var(--mdb-secondary-rgb)"
        color="rgba(var(--mdb-secondary-rgb)"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default memo(Reating);
