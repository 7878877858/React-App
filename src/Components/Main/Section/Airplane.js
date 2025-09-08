import cloud_tl from "../../../assets/image/vector/cloud_tl.svg";
import cloud_bl from "../../../assets/image/vector/cloud_bl.svg";
import cloud_tr from "../../../assets/image/vector/cloud_tr.svg";
import cloud_br from "../../../assets/image/vector/cloud_br.svg";
import airplane from "../../../assets/image/vector/airplane.svg";
import LazyImage from "../../../assets/js/LazyImage";

export default function Airplane() {
    return (
        <section>
            <div
                className="d-none d-md-block container position-relative overflow-hidden"
                style={{ height: "325px" }}
            >
                <LazyImage
                    src={cloud_tl}
                    alt="Cloud TL"
                    className="position-absolute cloud-animation"
                    style={{ width: "16vw", maxWidth: "200px", top: "16%", left: "4%", opacity: 0.8 }}
                />
                <LazyImage
                    src={cloud_bl}
                    alt="Cloud BL"
                    className="position-absolute cloud-animation"
                    style={{ width: "14vw", maxWidth: "200px", top: "76%", left: "24%", opacity: 0.6 }}
                />
                <LazyImage
                    src={cloud_tr}
                    alt="Cloud TR"
                    className="position-absolute cloud-animation"
                    style={{ width: "16vw", maxWidth: "200px", top: "24%", left: "77%", opacity: 0.7 }}
                />
                <LazyImage
                    src={cloud_br}
                    alt="Cloud BR"
                    className="position-absolute cloud-animation"
                    style={{ width: "16vw", maxWidth: "200px", top: "70%", left: "64%", opacity: 0.5 }}
                />
                <span
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <LazyImage
                        src={airplane}
                        alt="Airplane"
                        className="airplane-animation"
                    />
                </span>
            </div>
        </section>
    );
}
