export const NextStep = ({ toggleNextStep, disabled }: any) => {
    return (
        <button disabled={disabled} onClick={toggleNextStep}>
            <svg
                height="20"
                width="20"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 20 20"
                data-testid="NavigateNextIcon"
            >
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
        </button>
    );
};
