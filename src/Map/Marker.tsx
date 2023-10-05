export function Marker({text, onClick, isShowText}: any) {
        return (
            <>
                <div className={'marker-wrapper'}>
                    <div
                        className={'pin2'}
                        onClick={onClick}
                    >
                        {isShowText ?
                            <div className={'marker-text'}>{text}</div>
                            : <div></div>}
                    </div>

                </div>
            </>
        )

}

export default Marker;