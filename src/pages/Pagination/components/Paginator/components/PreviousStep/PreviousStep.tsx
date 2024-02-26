export const PreviousStep = ({ togglePreviousStep, disabled }: any) => {
    return (
        <button disabled={disabled} onClick={togglePreviousStep}>
            <svg
                width="20"
                height="20"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 20 20"
                data-testid="NavigateBeforeIcon"
            >
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
        </button>
    );
};
