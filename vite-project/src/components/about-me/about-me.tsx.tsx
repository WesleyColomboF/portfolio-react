import perfil from "../../assets/image.jpeg";
import Window from "../window/window";
import { CircleImage, Title, Text } from "./style";
export default function AboutMe() {
  return (
    <Window className="mt-3">
      <div className="d-flex">
        <div className="me-3">
          <h3 className="fs-4 fw-normal  mb-3">Quem sou</h3>

          <p className="fs-5 fw-light">
            Lorem ipsum dolor sit amet. Sit cupiditate nisi aut quia nihil in
            ullam dolores et quidem enim. Sit vitae laborum aut doloremque
            minima eum repudiandae beatae id iusto corrupti ab sint Quis ut
            dolor labore id obcaecati velit. Ut aperiam autem vel libero minima
            aut pariatur similique!
          </p>
        </div>
        <CircleImage src={perfil} />
      </div>
    </Window>
  );
}
