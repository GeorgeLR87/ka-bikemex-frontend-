// ./src/components/User/Profile.js

import React from 'react'

export default function Profile() {
	return (
		<div>
			<>
				<div className="bg-white shadow overflow-hidden sm:rounded-lg">
					<div className="px-4 py-5 sm:px-6">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							Perfil
						</h3>						
					</div>
					<div className="border-t border-gray-200 px-4 py-5 sm:px-6">
						<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
							<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500">
									Nombre Completo
								</dt>
								<dd className="mt-1 text-sm text-gray-900">
									Margot Foster
								</dd>
							</div>
							
							<div className="sm:col-span-1">
								<dt className="text-sm font-medium text-gray-500">
									Email 
								</dt>
								<dd className="mt-1 text-sm text-gray-900">
									margotfoster@example.com
								</dd>
							</div>
							
							
							
						</dl>
					</div>
				</div>

			</>
		</div>
	)
}
