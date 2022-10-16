import Container from "../layout/Container";
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function NotFound() {
    return (
      <Container>
        <div className="h-full flex items-center flex-col justify-center px-3">
          <div className="rounded-md bg-green-50 p-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ExclamationTriangleIcon className="h-5 w-5 text-orange-300" aria-hidden="true" />
              </div>
              <div className="ml-3 text-left">
                <h3 className="font-medium text-base text-black">La ruta que intentas consultar no existe</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }