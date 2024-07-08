import { useDocsQuery } from '../hooks/useFirestore';
const Test = () => {
    const { viTri } = useDocsQuery('diadiem');
    return (
        <>
            <div>
                {viTri ? (
                    <>
                        {viTri.map((vung) => {
                            <p>
                                {vung.ten}
                            </p>
                        })
                        }
                    </>
                ) : (
                    <>
                        <p>Không có dữ liệu</p>
                    </>
                )}
            </div>
        </>
    );
};

export default Test;