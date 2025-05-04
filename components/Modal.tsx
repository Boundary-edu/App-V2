import { Button } from "./Button";

interface ModalProps {
  onClose: () => void;
  onContinue: () => void;
  onFeedback: () => void;
}

// Modal 컴포넌트
export const Modal: React.FC<ModalProps> = ({ onClose, onContinue, onFeedback }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-6 max-w-82 w-full border-2 border-[#eee]">
        <h2 className="text-2xl text-black font-bold">계속 대화할건가요?</h2>
        <p className="mt-2 text-black">이미 AI와 충분한 대화를 나눴어요</p>

        <div className="mt-6 flex gap-4">
          <Button
            onClick={onContinue}
          >
            계속하기
          </Button>
          <Button
            isPrimary
            onClick={onFeedback}
          >
            피드백 받기
          </Button>
        </div>
      </div>
    </div>
  );
};
